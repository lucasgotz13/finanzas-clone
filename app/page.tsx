import { DollarCard } from "@/components/dollar-card";
import { DollarRate } from "@/lib/types";

async function getDollarRates(): Promise<DollarRate[]> {
    const res = await fetch("http://localhost:3000/api/rates", {
        cache: "no-store",
        headers: {
            "Cache-Control": "no-cache",
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch rates");
    }

    return res.json();
}

export default async function Home() {
    const dollarRates: DollarRate[] = await getDollarRates();
    return (
        <div className="mt-5 flex justify-center items-center flex-wrap gap-4 max-w-7xl mx-auto">
            {dollarRates.map((rate) => (
                <DollarCard key={rate.nombre} data={rate} />
            ))}
        </div>
    );
}
