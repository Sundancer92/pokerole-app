import { NextResponse } from "next/server";
import { getNatures } from "@/helper/getNatures";

export async function GET() {
	const filePath = "./public/data/Natures";
	const data = getNatures(filePath);

	return NextResponse.json(data);
}
