import type { Inflacion } from "@/lib/types";
export async function getInflationRate(): Promise<Inflacion[]> {
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

export async function getAnnualInflationRate(): Promise<Inflacion[]> {
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

export async function getRiesgoPais(): Promise<Inflacion> {
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
