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

    retornarDatos(): string{
       
        return "Nombre: " + this.nombre + 
               " RUC: " + this.ruc + 
               " Direccion: " + this.direccion +
               " Telefono: " + this.telefono;
    }
    
}