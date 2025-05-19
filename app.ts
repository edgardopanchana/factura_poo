import { CabeceraFactura } from "./cabecera_factura";
import { Factura } from "./factura";
import { Cliente } from "./cliente";
import { Empresa } from "./empresa";

const cliente = new Cliente("Juan Pueblo", "1311311310001", "Manta", "0994717772");
const empresa = new Empresa("Mi Empresa", "1311311310001", "Manta", "0994717772");
const cabecera_factura = new CabeceraFactura( new Date(), cliente, empresa);

const factura = new Factura(cabecera_factura);
console.log(factura.devolverDatos());
console.log("Total de esta factura:");console.log(factura.calcularTotal());