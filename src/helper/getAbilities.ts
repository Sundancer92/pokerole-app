import fs from "fs";
import path from "path";

export interface AbilitiesInfo {
	Name: string;
	Effect: string;
	Description: string;
	_id: string;
}

function readFile(filePath: string): AbilitiesInfo | null {
	try {
		const content = fs.readFileSync(filePath, "utf-8");

		const data = JSON.parse(content);

		return data;
	} catch (error) {
		console.error(`Error al leer el archivo ${filePath}: ${error}`);
		return null;
	}
}

export function getAbilities(folderPath: string): AbilitiesInfo[] {
	const fullPath = path.resolve(folderPath);

	const files = fs.readdirSync(fullPath);

	const filesInfo: AbilitiesInfo[] = [];

	files.forEach((file) => {
		const filePath = path.join(fullPath, file);
		const info = readFile(filePath);

		if (info) {
			filesInfo.push(info);
		}
	});
	return filesInfo;
}
