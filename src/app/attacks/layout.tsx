import type { Metadata } from "next";

import { ConfigProvider } from "antd";

import AttacksTopBar from "../components/topBars/AttacksTopBar";
import AttacksProvider from "../context/attacksProvider";

export const metadata: Metadata = {
	title: "Pokerole Attacks",
	description: "Attacks from Pokerole Rol Game.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ConfigProvider
			theme={{
				components: {
					List: {
						// itemPadding: "0px 15px",
						// borderRadius: 10,
					},
				},
				token: {
					// colorText: "rgba(255,255,255,1)",
				},
			}}
		>
			<section>
				<AttacksProvider>
					<AttacksTopBar />
					{children}
				</AttacksProvider>
			</section>
		</ConfigProvider>
	);
}
