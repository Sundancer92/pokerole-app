import type { Metadata } from "next";
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
		<section>
			<AttacksProvider>
				<AttacksTopBar />
				{children}
			</AttacksProvider>
		</section>
	);
}
