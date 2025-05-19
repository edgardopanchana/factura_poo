import { Cliente } from "./cliente";
import { Empresa } from "./empresa";

export class CabeceraFactura{
    
    fecha:Date;
    cliente:Cliente;
    empresa:Empresa;

    constructor(fecha:Date, 
     cliente:Cliente, empresa:Empresa){
        this.fecha = fecha;
        this.cliente = cliente;
        this.empresa = empresa;
    }
}