import { Share2, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { DollarRate } from "../lib/types";

export function DollarCard({ data }: { data: DollarRate }) {
    return (
        <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4">
                {/* Nombre de la moneda */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-zinc-100">
                        {data.nombre}
                    </h2>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <div className="space-x-2">
                        <Button
                            variant="ghost"
                            className="bg-black/30 text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 px-3 py-1 h-auto text-sm"
                        >
                            VENTA
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-zinc-500 border border-blue-400 hover:text-zinc-400 hover:bg-zinc-500/10 px-3 py-1 h-auto text-sm"
                        >
                            COMPRA
                        </Button>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-bold text-zinc-100">
                                ${data.venta.toFixed(2)}
                            </span>
                        </div>
                        <span className="text-2xl font-bold text-zinc-600">
                            /
                        </span>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-2xl font-bold text-zinc-600">
                                ${data.compra.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="link"
                            className="text-blue-400 hover:text-blue-300 p-0 h-auto text-sm"
                        >
                            <Info className="w-4 h-4 mr-1" />
                            Info
                        </Button>
                        <span className="text-zinc-500">Últimas 24 hs</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-zinc-500 hover:text-zinc-400 h-8 w-8"
                    >
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
