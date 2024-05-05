import { NextResponse } from "next/server";
import { getAttacks } from "@/helper/getAttacks";

export async function GET() {
	const filePath = "./public/data/Moves";
	const data = getAttacks(filePath);

	return NextResponse.json(data);
}
