"use client";
import React, { useContext, useState } from "react";
import styles from "./attacksTopBar.module.css";
import { Flex, Col, Row, Select, Button } from "antd";
import { AttacksInfo } from "@/helper/getAttacks";
import { StaticDataContext } from "@/app/context/staticDataProvider";
import { AttacksContext } from "@/app/context/attacksProvider";
import { LeftCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

const AttacksTopBar: React.FC = () => {
	const { attacksData } = useContext(StaticDataContext);
	const { attack, setAttack } = useContext(AttacksContext);

	const handleChange = (newValue: string) => {
		const final = attacksData.find(
			(attack: AttacksInfo) => attack.Name === newValue
		);

		if (final) {
			setAttack(final);
		} else {
			console.error("No existe ese ataque.");
		}
	};

	return (
		<Flex
			align="center"
			justify="space-around"
			style={{}}
			className={styles.topBar}
		>
			<Row style={{ width: "100%" }}>
				<Col
					span={15}
					offset={1}
					style={{ display: "flex", alignItems: "center" }}
				>
					<div>
						<Link
							href={"/"}
							style={{}}
						>
							<Button
								// type="primary"
								icon={<LeftCircleOutlined />}
								shape="circle"
								style={{
									fontSize: 30,
									backgroundColor: "white",
									border: "none",
								}}
							></Button>
						</Link>
					</div>
				</Col>

				<Col
					span={8}
					pull={1}
					style={{ display: "flex", justifyContent: "end" }}
				>
					<Select
						size="large"
						showSearch
						value={attack ? attack.Name : ""}
						placeholder={"Search"}
						className={styles.select}
						defaultActiveFirstOption={false}
						suffixIcon={null}
						allowClear={true}
						filterOption={(input, option) =>
							(option?.label ?? "").includes(input)
						}
						filterSort={(optionA, optionB) =>
							(optionA?.label ?? "")
								.toLowerCase()
								.localeCompare((optionB?.label ?? "").toLowerCase())
						}
						onChange={handleChange}
						notFoundContent={null}
						options={(attacksData || []).map((d: AttacksInfo) => ({
							value: d.Name,
							label: d.Name,
						}))}
					/>
				</Col>
			</Row>
		</Flex>
	);
};

export default AttacksTopBar;
