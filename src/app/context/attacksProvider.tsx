"use client";

import { createContext, useState } from "react";
import { AttacksInfo } from "@/helper/getAttacks";

export const AttacksContext = createContext<AttacksInfo | {}>({});

export default function AttacksProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [attack, setAttack] = useState<AttacksInfo>();

	return (
		<AttacksContext.Provider value={{ attack, setAttack }}>
			{children}
		</AttacksContext.Provider>
	);
}
