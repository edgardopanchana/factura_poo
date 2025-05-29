export class Producto {
    codigo:string;
    nombre:string;
    precio:number;
    
    constructor(codigo:string, nombre:string, precio:number){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    retornarDatos(): string{
        
        return "Codigo: " + this.codigo +
               " Nombre: " + this.nombre +
               " Precio: " + this.precio;
    }
}