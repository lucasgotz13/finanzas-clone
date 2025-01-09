import { InflacionMensual } from "@/lib/types";
import { Card, CardContent, CardFooter } from "./ui/card";

export default function ArgyDataCard({
    data,
    nombre,
}: {
    data: InflacionMensual;
    nombre: string;
}) {
    return (
        <Card className="w-[300px] bg-zinc-900 text-white border-zinc-800">
            <CardContent className="pt-6 px-6">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{nombre}</h2>
                    <p className="text-3xl font-bold text-zinc-400">
                        {data.valor}
                    </p>
                    <p className="text-sm text-zinc-500">
                        Last update: {data.fecha}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="pt-4 pb-6 px-6">
                <p className="text-sm text-zinc-400">Rava</p>
            </CardFooter>
        </Card>
    );
}
