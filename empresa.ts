export class Empresa {
    nombre: string;
    ruc: string;
    direccion: string;
    telefono: string;

    constructor(nombre: string, ruc: string, direccion: string, telefono: string) {
        this.nombre = nombre;
        this.ruc = ruc;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    devolverDatos(): string {
        return `Nombre: ${this.nombre}\nRUC: ${this.ruc}\nDireccion: ${this.direccion}\nTelefono: ${this.telefono}`;
    }
}