import fs from "fs";
import path from "path";

export interface ItemsInfo {
	Name: string;
	_id: string;
	Source: string;
	PMD: boolean;
	Pocket: string;
	Category?: string;
	Description: string;
	OneUse?: boolean;
	TrainerPrice?: string;
	ForTypes?: string;
	Boost?: string;
	Value?: number;
	ForPokemon?: string;
	PMDPrice?: number;
	HealthRestored?: number;
}

function readFile(filePath: string): ItemsInfo | null {
	try {
		const content = fs.readFileSync(filePath, "utf-8");

		const data = JSON.parse(content);

		return data;
	} catch (error) {
		console.error(`Error al leer el archivo ${filePath}: ${error}`);
		return null;
	}
}

export function getItems(folderPath: string): ItemsInfo[] {
	const fullPath = path.resolve(folderPath);

	const files = fs.readdirSync(fullPath);

	const filesInfo: ItemsInfo[] = [];

	files.forEach((file) => {
		const filePath = path.join(fullPath, file);
		const info = readFile(filePath);

		if (info) {
			filesInfo.push(info);
		}
	});
	return filesInfo;
}
