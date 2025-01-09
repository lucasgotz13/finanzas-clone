import { NextResponse } from "next/server";
import type { DollarRate } from "@/lib/types";

export async function GET() {
    try {
        const response = await fetch("https://dolarapi.com/v1/ambito/dolares");
        const data: DollarRate[] = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch dollar rates" },
            { status: 500 }
        );
    }
}