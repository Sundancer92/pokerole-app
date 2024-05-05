import { NextResponse } from "next/server";
import { getItems } from "@/helper/getItems";

export async function GET() {
	const filePath = "./public/data/Items";
	const data = getItems(filePath);

	return NextResponse.json(data);
}
