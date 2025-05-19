import { CabeceraFactura } from "./cabecera_factura";
import { DetalleFactura } from "./detalle_factura";
import { Producto } from "./producto";

export class Factura{
    //Agregación
    cabeceraFactura:CabeceraFactura;
    //Composición
    detalleFactura:DetalleFactura[] = [];

    constructor(cabeceraFactura:CabeceraFactura){
        this.cabeceraFactura = cabeceraFactura;
        this.llenarDetalleFactura();
    }

    llenarDetalleFactura():void{
        const producto1 = new Producto("arroz", 2);
        this.detalleFactura.push(new DetalleFactura(producto1, 5));
        const producto2 = new Producto("pollo", 1);
        this.detalleFactura.push(new DetalleFactura(producto2, 3));
        const producto3 = new Producto("carne", 3);
        this.detalleFactura.push(new DetalleFactura(producto3, 2));
        const producto4 = new Producto("pescado", 4);
        this.detalleFactura.push(new DetalleFactura(producto4, 1));
    }
       
       

    calcularTotal():number{
        let total = 0;
        for(let i=0; i<this.detalleFactura.length; i++){
            total += this.detalleFactura[i].producto.precio * this.detalleFactura[i].cantidad;
        }
        return total;
    }


    devolverDatos():string{
        let datos = `Fecha: ${this.cabeceraFactura.fecha}\n`;
        datos += `RUC: ${this.cabeceraFactura.empresa.ruc}\n`; 
        datos += `Empresa: ${this.cabeceraFactura.empresa.nombre}\n`;
        datos += `Nombre Cliente: ${this.cabeceraFactura.cliente.nombre}\n`;
        datos += `RUC: ${this.cabeceraFactura.cliente.ruc}\n`;
        datos += `Direccion: ${this.cabeceraFactura.cliente.direccion}\n`;
        datos += `Telefono: ${this.cabeceraFactura.cliente.telefono}\n`;
        datos += `Detalles de la factura:\n`;
        datos += `PRODUCTO-\tCANTIDAD-\tSUBTOTAL\n`;
        for(let i=0; i<this.detalleFactura.length; i++){
            datos += `${this.detalleFactura[i].producto.nombre}\t-\t${this.detalleFactura[i].cantidad}\t-\t${this.detalleFactura[i].producto.precio * this.detalleFactura[i].cantidad}\n`;
        }
        return datos;
    }
}