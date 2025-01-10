export interface DollarRate {
    compra: number;
    venta: number;
    casa: string;
    nombre: string;
    moneda: string;
    fechaActualizacion: string;
}

export interface Inflacion {
    fecha: string;
    valor: number;
}

export interface DataPoint {
    date: string;
    value: number;
}
