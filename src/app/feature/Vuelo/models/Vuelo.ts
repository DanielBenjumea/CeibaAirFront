export interface Vuelo {
    id: number;
    desde: string;
    hacia: string;
    precio: number;
    fecha: Date;
    passengers: Array<any>;
}