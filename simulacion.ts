// Importar o definir BDClientes antes de usarlo
import { BDClientes, BDProductos } from './backend'; // Ajusta la ruta según c
import { Empresa } from "./empresa";
import { Factura } from "./factura";
import { CabeceraFactura } from "./cabecera_factura";
import { DetalleFactura } from './detalle_factura';


export class Simulacion {

    constructor(){
        //seleccionar un cliente aleatoreo de BDClientes
        const clienteAleatorio = BDClientes.getInstance().getClientes()[Math.floor(Math.random() * BDClientes.getInstance().getClientes().length)];
        const empresa = new Empresa("La Favorita", "1311311310001", "Manta", "0994717772");
        // Crear una cabecera de factura con la fecha actual, el cliente aleatorio y la empresa
        const cabeceraFactura = new CabeceraFactura(new Date(), clienteAleatorio, empresa);

        // Facturar con la cabecera de factura creada
        console.log("Iniciando simulación de facturación...");
        this.facturar(cabeceraFactura, this.populateDetalleFactura());
    }

    populateDetalleFactura(): DetalleFactura[] {
        // Aquí puedes implementar la lógica para poblar el detalle de la factura
        console.log("Poblando detalle de la factura...");
        // Por ejemplo, podrías agregar productos aleatorios al detalle de la factura
        const productos = BDProductos.getInstance().getProductos();
        const detalleFactura: { producto: any; cantidad: number }[] = [];
        for (let i = 0; i < 5; i++) { // Simular 5 productos
            const productoAleatorio = productos[Math.floor(Math.random() * productos.length)];
            detalleFactura.push({
                producto: productoAleatorio,
                cantidad: Math.floor(Math.random() * 10) + 1 // Cantidad aleatoria entre 1 y 10
            });
        }
        console.log("Productos elegidos para facturar:");
        detalleFactura.forEach(item => {
            console.log(`Producto: ${item.producto.nombre}, Cantidad: ${item.cantidad}`);
        });
        return detalleFactura;
        
    }


facturar(cabecera_factura:CabeceraFactura, detalle_factura:DetalleFactura[]): void {
    // Aquí puedes implementar la lógica para facturar
    console.log("################################################");
    console.log("Facturando...");
    // Por ejemplo, podrías crear una factura y calcular su total
    const factura = new Factura(cabecera_factura, detalle_factura);
    // Simular la adición aleatorea de productos a la factura
    const productos = BDProductos.getInstance().getProductos();

    console.log(factura.devolverDatos());
    console.log("################################################");
    console.log("Subtotal de la factura: ");
    // Calcular el total de la factura
    console.log( factura.calcularTotal());

}

}