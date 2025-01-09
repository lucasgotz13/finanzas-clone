"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "PANEL GENERAL", href: "/", active: true },
    { name: "MERCADO BLUE", href: "/mercado-blue" },
    { name: "DÓLAR BANCOS", href: "/dolar-bancos" },
    { name: "CRIPTOMONEDAS", href: "/criptomonedas" },
    { name: "STREAMING", href: "/streaming" },
    { name: "DATOS ARGY", href: "/datos-argy" },
];

const otrasItems = [
    { name: "Euro", href: "/opcion-1" },
    { name: "Real", href: "/opcion-2" },
];
export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* ...existing logo code... */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="text-blue-500">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M3 6.5h18v3H3v-3zm0 8h18v3H3v-3z" />
                            </svg>
                        </div>
                        <span className="text-white text-xl font-bold">
                            Finanzas Argy
                        </span>
                    </Link>

                    {/* Navigation Items */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm ${
                                    pathname === item.href
                                        ? "text-blue-500"
                                        : "text-zinc-400 hover:text-white"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
