export interface Usuario {
    id?: number;
    nombre: string;
    clave?: string;
    monto?: number;
    fechaCreacion?: Date;
    isAdmin?: boolean;
}