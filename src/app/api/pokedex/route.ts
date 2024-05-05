import { NextResponse } from "next/server";
import { getPokedex } from "@/helper/getPokedex";

export async function GET() {
	const filePath = "./public/data/Pokedex";
	const data = getPokedex(filePath);

	return NextResponse.json(data);
}
