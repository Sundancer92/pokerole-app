import { NextResponse } from "next/server";
import { getAbilities } from "@/helper/getAbilities";

export async function GET() {
	const filePath = "./public/data/Abilities";
	const data = getAbilities(filePath);

	return NextResponse.json(data);
}
