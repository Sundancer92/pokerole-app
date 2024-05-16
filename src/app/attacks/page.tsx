"use client";
import { useContext } from "react";
import { StaticDataContext } from "../context/staticDataProvider";
import { AttacksContext } from "../context/attacksProvider";
import { Col, Row, List, DescriptionsProps, Descriptions } from "antd";

import { AttacksInfo } from "@/helper/getAttacks";
import typeColor from "@/helper/Colors/switchTypeColors";

import styles from "./page.module.css";
import DescriptionsItem from "antd/es/descriptions/Item";

const page = () => {
	const { attacksData } = useContext(StaticDataContext);
	const { attack, setAttack } = useContext(AttacksContext);

	let attackDetails: DescriptionsProps["items"] = [
		{
			label: "Accuracy",
			children: `${attack?.Accuracy1} + ${attack?.Accuracy2}`,
			// labelStyle: { padding: "10px" },
			// contentStyle: { padding: "10px" },
		},
		{
			label: "Damage",
			children: attack?.Damage1
				? `${attack.Damage1} + ${attack.Power}`
				: "-",
		},
		{
			label: "Target",
			children: attack?.Target,
		},
		{
			label: "Effect",
			children: attack?.Effect,
		},
		{
			label: "Description",
			children: attack?.Description,
			labelStyle: {},
		},
	];
	return (
		<div>
			<Row>
				<Col
					span={7}
					offset={1}
					className={styles.attacksListContainer}
				>
					<div className={styles.attacksList}>
						<List
							pagination={{
								position: "bottom",
								align: "center",
								defaultPageSize: 8,
								showSizeChanger: false,
								size: "small",
								simple: true,
								style: { marginTop: -15 },
							}}
							dataSource={attacksData}
							renderItem={(item: AttacksInfo, index) => (
								<List.Item
									className={`${item.Type} ${styles.attacksList}`}
									style={{ border: "2px solid black" }}
								>
									<List.Item.Meta
										title={
											<p
												onClick={() => setAttack(item)}
												// style={{ margin: 0 }}
												className={styles.listItem}
											>
												{item.Name}
											</p>
										}
									/>
								</List.Item>
							)}
						/>
					</div>
				</Col>
				<Col span={15}>
					{attack != undefined && (
						<Descriptions
							style={{
								marginRight: 10,
								marginLeft: 10,
							}}
							title={
								<div
									id="descriptionsTitle"
									style={{
										margin: "5px 0 0 1px",
										display: "flex",
										justifyContent: "space-between",
										// border: "2px solid black",
										borderTopLeftRadius: 10,
										borderTopRightRadius: 10,
										padding: "0 10px",
									}}
									className={attack.Type}
								>
									<p style={{ margin: 0, paddingBottom: 3 }}>
										{attack?.Name}
									</p>
									<p
										style={{
											margin: 0,
											paddingBottom: 3,
										}}
									>
										{attack.Type}
									</p>
									<p style={{ margin: 0, paddingBottom: 3 }}>
										POWER: {attack.Power}
									</p>
									<p style={{ margin: 0, paddingBottom: 3 }}>
										{attack.Category}
									</p>
								</div>
							}
							bordered
							column={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
						>
							<DescriptionsItem
								label="Accuracy"
								labelStyle={{
									backgroundColor: typeColor(attack?.Type),
									fontWeight: 600,
									color: "white",
									// borderTopLeftRadius: 10,
								}}
								contentStyle={{
									padding: "10px 10px",
									borderTopRightRadius: 0,
								}}
							>
								{attack?.Accuracy1} + {attack?.Accuracy2}
							</DescriptionsItem>
							<DescriptionsItem
								label="Damage"
								labelStyle={{
									backgroundColor: typeColor(attack?.Type),
									fontWeight: 600,
									color: "white",
								}}
								contentStyle={{ padding: "10px 10px" }}
							>
								{attack?.Damage1
									? `${attack.Damage1} + ${attack.Power}`
									: "-"}
							</DescriptionsItem>
							<DescriptionsItem
								label="Target"
								labelStyle={{
									backgroundColor: typeColor(attack?.Type),
									fontWeight: 600,
									color: "white",
								}}
								contentStyle={{ padding: "10px 10px" }}
							>
								{attack?.Target}
							</DescriptionsItem>
							<DescriptionsItem
								label={"Effect"}
								labelStyle={{
									backgroundColor: typeColor(attack?.Type),
									fontWeight: 600,
									color: "white",
								}}
								contentStyle={{ padding: "10px 10px" }}
							>
								{attack?.Effect}
							</DescriptionsItem>
							<DescriptionsItem
								label="Description"
								labelStyle={{
									backgroundColor: typeColor(attack?.Type),
									fontWeight: 600,
									color: "white",
									borderBottomLeftRadius: 10,
								}}
								contentStyle={{ padding: "10px 10px" }}
							>
								{attack?.Description}
							</DescriptionsItem>
						</Descriptions>
					)}
				</Col>
			</Row>
		</div>
	);
};

export default page;
