import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { InflacionMensual } from "@/lib/types";

export default function ArgyInflationDataCard({
    data,
    nombre,
}: {
    data: InflacionMensual[];
    nombre: string;
}) {
    const lastInflationRate: InflacionMensual = data[data.length - 1];
    return (
        <Card className="w-[300px] bg-zinc-900 text-white border-zinc-800">
            <CardContent className="pt-6 px-6">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{nombre}</h2>
                    <p className="text-3xl font-bold text-zinc-400">
                        {lastInflationRate.valor}%
                    </p>
                    <p className="text-sm text-zinc-500">
                        Last update: {lastInflationRate.fecha}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="pt-4 pb-6 px-6">
                <p className="text-sm text-zinc-400">Indec</p>
            </CardFooter>
        </Card>
    );
}
