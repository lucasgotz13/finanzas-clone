export interface DollarRate {
    compra: number;
    venta: number;
    casa: string;
    nombre: string;
    moneda: string;
    fechaActualizacion: string;
}

export interface InflacionMensual {
    fecha: string;
    valor: number;
}
