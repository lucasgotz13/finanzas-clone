import type { InflacionMensual } from "@/lib/types";
export async function getInflationRate(): Promise<InflacionMensual[]> {
    const res = await fetch(
        "http://localhost:3000/api/datos-argy/inflacion-mensual",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch rates");
    }

    return res.json();
}

export async function getAnnualInflationRate(): Promise<InflacionMensual[]> {
    const res = await fetch(
        "http://localhost:3000/api/datos-argy/inflacion-interanual",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch rates");
    }

    return res.json();
}

export async function getRiesgoPais(): Promise<InflacionMensual> {
    const res = await fetch(
        "http://localhost:3000/api/datos-argy/riesgo-pais",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch rates");
    }

    return res.json();
}
