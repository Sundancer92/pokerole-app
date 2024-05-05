"use client";
import React, { useContext, useState } from "react";
import styles from "./attacksTopBar.module.css";
import { Flex, Col, Row, Select } from "antd";
import { AttacksInfo } from "@/helper/getAttacks";
import { StaticDataContext } from "@/app/context/staticDataProvider";
import { AttacksContext } from "@/app/context/attacksProvider";

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
			justify="end"
			style={{}}
			className={styles.topBar}
		>
			<Row>
				<Col span={6}>
					<Select
						size="large"
						showSearch
						value={attack ? attack.Name : undefined}
						placeholder={"Search"}
						className={styles.select}
						defaultActiveFirstOption={false}
						suffixIcon={null}
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
