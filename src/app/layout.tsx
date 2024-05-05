import type { Metadata } from "next";
import StaticDataProvider from "./context/staticDataProvider";
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
			<StaticDataProvider>
				<body>{children}</body>
			</StaticDataProvider>
		</html>
	);
}
