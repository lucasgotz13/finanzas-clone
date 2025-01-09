import { NextResponse } from "next/server";
import type { InflacionMensual } from "@/lib/types";

export async function GET() {
    try {
        // Replace with your actual API endpoint
        const response = await fetch(
            "https://api.argentinadatos.com/v1/finanzas/indices/inflacion"
        );
        const data: InflacionMensual[] = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch dollar rates" },
            { status: 500 }
        );
    }
}
