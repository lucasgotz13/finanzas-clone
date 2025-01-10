import {
    getAnnualInflationRate,
    getInflationRate,
    getRiesgoPais,
} from "./data";
import ArgyDataCard from "@/components/argy-data-card";
import FinancialCard from "@/components/financial-card";

export default async function Home() {
    const inflationRate = await getInflationRate();
    const annualInflationRate = await getAnnualInflationRate();
    const riesgoPais = await getRiesgoPais();
    return (
        <div className="mt-5 max-w-7xl mx-auto flex justify-center flex-wrap gap-5">
            <FinancialCard data={inflationRate} nombre="Inflación mensual" />
            <FinancialCard
                data={annualInflationRate}
                nombre="Inflación interanual"
            />
            <ArgyDataCard data={riesgoPais} nombre="Riesgo país" />
        </div>
    );
}
