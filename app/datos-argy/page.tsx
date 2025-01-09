import ArgyInflationDataCard from "@/components/argy-inflation-card";
import {
    getAnnualInflationRate,
    getInflationRate,
    getRiesgoPais,
} from "./data";
import ArgyDataCard from "@/components/argy-data-card";
import { InflacionMensual } from "@/lib/types";

export default async function Home() {
    const inflationRate = await getInflationRate();
    const annualInflationRate = await getAnnualInflationRate();
    const riesgoPais = await getRiesgoPais();
    return (
        <div className="mt-5 max-w-7xl mx-auto flex justify-center flex-wrap gap-5">
            <ArgyInflationDataCard
                data={inflationRate}
                nombre="Inflación mensual"
            />
            <ArgyInflationDataCard
                data={annualInflationRate}
                nombre="Inflación interanual"
            />
            <ArgyDataCard data={riesgoPais} nombre="Riesgo país" />
        </div>
    );
}
