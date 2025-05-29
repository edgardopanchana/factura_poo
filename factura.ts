import { CabeceraFactura } from "./cabecera_factura";
import { DetalleFactura } from "./detalle_factura";
import { Producto } from "./producto";

export class Factura{
    
    cabeceraFactura:CabeceraFactura;
    detalleFactura:DetalleFactura[] = [];

    constructor(cabeceraFactura:CabeceraFactura, detalleFactura:DetalleFactura[] = []){
        this.cabeceraFactura = cabeceraFactura;
        this.detalleFactura = detalleFactura;
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