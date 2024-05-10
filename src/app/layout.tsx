import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import StaticDataProvider from "./context/staticDataProvider";
import FullScreenDemo from "@/helper/FullScreen/fullscreen";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pokerole App",
	description: "Applications for Pokerole Rol Game.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ConfigProvider
				theme={{
					components: {
						// List: {
						// 	descriptionFontSize: 5,
						// 	footerBg: "#000",
						// 	itemPadding: "0px 15px",
						// 	metaMarginBottom: "bottom: 0",
						// 	emptyTextPadding: "padding: 0px",
						// },
					},
				}}
			>
				<StaticDataProvider>
					<body>
						<FullScreenDemo />
						{children}
					</body>
				</StaticDataProvider>
			</ConfigProvider>
		</html>
	);
}
