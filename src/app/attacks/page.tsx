"use client";
import { useContext } from "react";
import { StaticDataContext } from "../context/staticDataProvider";
import { AttacksContext } from "../context/attacksProvider";
import { Col, Row, List, DescriptionsProps, Descriptions } from "antd";
import { AttacksInfo } from "@/helper/getAttacks";

import styles from "./page.module.css";

const page = () => {
	const { attacksData } = useContext(StaticDataContext);
	const { attack, setAttack } = useContext(AttacksContext);

	let attackDetails: DescriptionsProps["items"] = [
		{
			label: "Accuracy",
			// span: { xs: 2, sm: 2, md: 2, lg: 3, xl: 2, xxl: 2 },
			// span: { xs: 1 },
			children: `${attack?.Accuracy1} + ${attack?.Accuracy2}`,
		},
		{
			label: "Damage",
			// span: { xs: 2, sm: 2, md: 2, lg: 3, xl: 2, xxl: 2 },
			// span: { xs: 1 },
			children: attack?.Damage1
				? `${attack.Damage1} + ${attack.Power}`
				: "-",
		},
		{
			label: "Target",
			// span: { xs: 1 },
			children: attack?.Target,
		},
		{
			label: "Effect",
			// span: { xs: 1 },
			children: attack?.Effect,
		},
		{
			label: "Description",
			// span: { xs: 1 },
			children: attack?.Description,
		},
	];
	return (
		<div>
			<Row className={styles.attacksListContainer}>
				<Col
					span={6}
					offset={1}
				>
					<div className={styles.attacksList}>
						<List
							pagination={{
								position: "bottom",
								align: "center",
								defaultPageSize: 7,
								showSizeChanger: false,
								size: "small",
								simple: true,
							}}
							dataSource={attacksData}
							renderItem={(item: AttacksInfo, index) => (
								<List.Item
									className={`${item.Type} ${styles.attacksList}`}
								>
									<List.Item.Meta
										// title={<a href="https://ant.design">{item.title}</a>}
										title={
											<p
												onClick={() => setAttack(item)}
												// style={{ margin: 0 }}
												className={styles.listItem}
											>
												{item.Name}
											</p>
										}
										// avatar={
										// 	<Avatar
										// 		src={`./`}
										// 	/>
										// }
										// description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</div>
				</Col>
				<Col span={16}>
					{attack != undefined && (
						<Descriptions
							style={{ marginRight: 10, marginLeft: 10 }}
							title={
								<div
									style={{
										margin: "5px 0 0 0",
										display: "flex",
										justifyContent: "space-between",
										border: "2px solid black",
										borderRadius: 10,
										padding: "0 5px",
									}}
									className={attack.Type}
								>
									<p style={{ margin: 0 }}>{attack?.Name}</p>
									<p
										style={{
											margin: 0,
										}}
									>
										{attack.Type}
									</p>
									<p style={{ margin: 0 }}>POWER: {attack.Power}</p>
									<p style={{ margin: 0 }}>{attack.Category}</p>
								</div>
							}
							bordered
							items={attackDetails}
							// column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
							column={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
						/>
					)}
				</Col>
			</Row>
		</div>
	);
};

export default page;
