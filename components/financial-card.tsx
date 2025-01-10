"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { X } from "lucide-react";
import { Inflacion } from "@/lib/types";

export default function FinancialCard({
    data,
    nombre,
}: {
    data: Inflacion[];
    nombre: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const currentData = data[data.length - 1];

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Card className="w-[300px] bg-zinc-900 text-white border-zinc-800 cursor-pointer transition-transform duration-200 hover:scale-105">
                    <CardContent className="pt-6 px-6">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">{nombre}</h2>
                            <p className="text-3xl font-bold text-zinc-400">
                                {currentData.valor}%
                            </p>
                            <p className="text-sm text-zinc-500">
                                Last update: {currentData.fecha}
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="pt-4 pb-6 px-6">
                        <p className="text-sm text-zinc-400">Indec</p>
                    </CardFooter>
                </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] bg-zinc-900 border-zinc-800">
                <ChartPopup data={data} nombre={nombre} />
                <AnimatedCloseButton onClose={() => setIsOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}

function ChartPopup({ data, nombre }: { data: any; nombre: string }) {
    let filteredData = data.slice(-36);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <h2 className="text-2xl font-semibold mb-4 text-white">
                Evolución de {nombre}
            </h2>
            <ChartContainer
                config={{
                    value: {
                        label: "Value",
                        color: "hsl(var(--primary))",
                    },
                }}
                className="h-[300px]"
            >
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient
                                id="colorValue"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="rgb(45, 212, 191)"
                                    stopOpacity={0.3}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="rgb(45, 212, 191)"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="fecha" stroke="#666" tickLine={false} />
                        <YAxis
                            stroke="#666"
                            tickLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                            type="monotone"
                            dataKey="valor"
                            stroke="rgb(45, 212, 191)"
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            animationDuration={1000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </ChartContainer>
        </motion.div>
    );
}

function AnimatedCloseButton({ onClose }: { onClose: () => void }) {
    return (
        <motion.button
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-600"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 17 }}
        >
            <X className="w-5 h-5" />
            <span className="sr-only">Close</span>
        </motion.button>
    );
}
