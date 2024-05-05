"use client";
import { useContext } from "react";
import { StaticDataContext } from "./context/staticDataProvider";
import { Button, Col, Row } from "antd";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	const attacks = useContext(StaticDataContext);

	return (
		<main className={styles.appBg}>
			<div className={styles.buttonsContainer}>
				<Row gutter={[16, 16]}>
					<Col span={12}>
						<Button
							size="large"
							block
							disabled
						>
							Load Trainer
						</Button>
					</Col>
					<Col
						span={12}
						pull={0}
					>
						<Button
							size="large"
							block
							disabled
						>
							New Trainer
						</Button>
					</Col>
					<Col span={12}>
						<Button
							size="large"
							block
							disabled
						>
							Pokedex
						</Button>
					</Col>
					<Col
						span={12}
						pull={0}
					>
						<Button
							size="large"
							block
							disabled
						>
							Store
						</Button>
					</Col>
					<Col span={12}>
						<Link href={"/attacks"}>
							<Button
								size="large"
								block
							>
								Attacks
							</Button>
						</Link>
					</Col>
					<Col
						span={12}
						pull={0}
					>
						<Button
							size="large"
							block
							disabled
						>
							Generate Encounter
						</Button>
					</Col>
				</Row>
			</div>
		</main>
	);
}
