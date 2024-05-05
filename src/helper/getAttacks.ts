import fs from "fs";
import path from "path";

export interface AttacksInfo {
	Name: string;
	Type: string;
	Power: number;
	Damage1: string;
	Damage2?: string;
	Accuracy1: string;
	Accuracy2: string;
	Target: string;
	Effect: string;
	Description: string;
	Id: string;
	Attributes?: object;
	AddedEffect?: object;
	Category: string;
}

function readFile(filePath: string): AttacksInfo | null {
	try {
		const content = fs.readFileSync(filePath, "utf-8");

		const data = JSON.parse(content);

		return data;
	} catch (error) {
		console.error(`Error al leer el archivo ${filePath}: ${error}`);
		return null;
	}
}

export function getAttacks(folderPath: string): AttacksInfo[] {
	const fullPath = path.resolve(folderPath);

	const files = fs.readdirSync(fullPath);

	const filesInfo: AttacksInfo[] = [];

	files.forEach((file) => {
		const filePath = path.join(fullPath, file);
		const info = readFile(filePath);

		if (info) {
			filesInfo.push(info);
		}
	});
	return filesInfo;
}
