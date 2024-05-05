import fs from "fs";
import path from "path";

interface Height {
	Meters: number;
	Feet: number;
}

interface Weight {
	Kilograms: number;
	Pounds: number;
}

interface Evolutions {
	From?: string;
	Kind?: string;
	To?: string;
	Speed?: string;
	Item?: string;
}

interface Moves {
	Learned: string;
	Name: string;
}

export interface PokedexInfo {
	Number: number;
	DexID: string;
	Name: string;
	Type1: string;
	Type2?: string;
	BaseHP: number;
	Strength: number;
	MaxStrength: number;
	Dexterity: number;
	MaxDexterity: number;
	Vitality: number;
	MaxVitality: number;
	Special: number;
	MaxSpecial: number;
	Insight: number;
	MaxInsight: number;
	Ability1: string;
	Ability2?: string;
	HiddenAbility?: string;
	EventAbilities?: string;
	RecommendedRank: string;
	GenderType?: string;
	Legendary: boolean;
	GoodStarter: boolean;
	_id: string;
	DexCategory: string;
	Height: Height;
	Weight: Weight;
	DexDescription: string;
	Evolutions: Evolutions[];
	Image: string;
	Moves: Moves[];
}

function readFile(filePath: string): PokedexInfo | null {
	try {
		const content = fs.readFileSync(filePath, "utf-8");

		const data = JSON.parse(content);

		return data;
	} catch (error) {
		console.error(`Error al leer el archivo ${filePath}: ${error}`);
		return null;
	}
}

export function getPokedex(folderPath: string): PokedexInfo[] {
	const fullPath = path.resolve(folderPath);

	const files = fs.readdirSync(fullPath);

	const filesInfo: PokedexInfo[] = [];

	files.forEach((file) => {
		const filePath = path.join(fullPath, file);
		const info = readFile(filePath);

		if (info) {
			filesInfo.push(info);
		}
	});
	return filesInfo;
}
