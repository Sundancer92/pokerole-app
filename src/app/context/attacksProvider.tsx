"use client";

import { createContext, useState } from "react";
import { AttacksInfo } from "@/helper/getAttacks";

interface AttacksContextType {
	attack: AttacksInfo | null;
	setAttack: (attack: AttacksInfo) => void;
}

export const AttacksContext = createContext<AttacksContextType>({
	attack: null,
	setAttack: () => {},
});

export default function AttacksProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [attack, setAttack] = useState<AttacksInfo | null>(null);

	const updateAttack = (newAttack: AttacksInfo) => {
		setAttack(newAttack);
	};

	return (
		<AttacksContext.Provider value={{ attack, setAttack: updateAttack }}>
			{children}
		</AttacksContext.Provider>
	);
}
