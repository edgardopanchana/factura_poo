export class Cliente{
    nombre: string;
    ruc: string;
    direccion: string;
    telefono: string;

    constructor(nombre: string, ruc: string, direccion: string, telefono: string){
        this.nombre = nombre;
        this.ruc = ruc;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    imprimirCliente(): void{
        console.log("Nombre: " + this.nombre);
        console.log("RUC: " + this.ruc);
        console.log("Direccion: " + this.direccion);
        console.log("Telefono: " + this.telefono);
    }
}