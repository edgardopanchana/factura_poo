import { BDClientes, BDProductos } from "./backend";
import {Simulacion} from "./simulacion";


 console.log("Retornando datos del clientes registrados en la BD");
BDClientes.getInstance().getClientes().forEach(element => {
    console.log( element.retornarDatos());
});

console.log("Retornando datos de productos registrados en la BD");
BDProductos.getInstance().getProductos().forEach(element => {
    console.log( element.retornarDatos());
});

//iniciar simulacion
const iniciarSimulacion = new Simulacion();
