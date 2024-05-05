"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import { AttacksInfo } from "@/helper/getAttacks";
import { AbilitiesInfo } from "@/helper/getAbilities";
import { ItemsInfo } from "@/helper/getItems";
import { NaturesInfo } from "@/helper/getNatures";
import { PokedexInfo } from "@/helper/getPokedex";

interface StaticData {
	attacksData: AttacksInfo[];
	abilitiesData: AbilitiesInfo[];
	itemsData: ItemsInfo[];
	naturesData: NaturesInfo[];
	pokedexData: PokedexInfo[];
}

export const StaticDataContext = createContext<StaticData>({
	attacksData: [],
	abilitiesData: [],
	itemsData: [],
	naturesData: [],
	pokedexData: [],
});

export default function StaticDataProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [attacksData, setAttacksData] = useState<AttacksInfo[]>([]);
	const [abilitiesData, setAbilitiesData] = useState<AbilitiesInfo[]>([]);
	const [itemsData, setItemsData] = useState<ItemsInfo[]>([]);
	const [naturesData, setNaturesData] = useState<NaturesInfo[]>([]);
	const [pokedexData, setPokedexData] = useState<PokedexInfo[]>([]);

	useEffect(() => {
		const routes = ["attacks", "abilities", "items", "natures", "pokedex"];

		const fetchData = async (route: string) => {
			try {
				const response = await fetch(`/api/${route}`, {
					// cache: "force-cache",
					cache: "no-cache",
				});
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return await response.json(); // Devuelve los datos como resultado de la promesa
			} catch (error) {
				console.error("Error al obtener los datos:", error);
				throw error; // Propaga el error para que pueda ser manejado externamente
			}
		};

		routes.map((route) => {
			fetchData(route)
				.then((data) => {
					switch (route) {
						case "attacks":
							setAttacksData(data);
							break;
						case "abilities":
							setAbilitiesData(data);
							break;
						case "items":
							setItemsData(data);
							break;
						case "natures":
							setNaturesData(data);
							break;
						case "pokedex":
							setPokedexData(data);
							break;
					}
				})
				.catch((error) => {
					// Maneja cualquier error que pueda ocurrir durante la obtención de datos
					console.error("Error al obtener los datos de ataques:", error);
				});
		});
	}, []);

	return (
		<StaticDataContext.Provider
			value={{
				attacksData,
				abilitiesData,
				itemsData,
				naturesData,
				pokedexData,
			}}
		>
			{children}
		</StaticDataContext.Provider>
	);
}
