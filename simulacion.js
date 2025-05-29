"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulacion = void 0;
// Importar o definir BDClientes antes de usarlo
var backend_1 = require("./backend"); // Ajusta la ruta según c
var empresa_1 = require("./empresa");
var factura_1 = require("./factura");
var cabecera_factura_1 = require("./cabecera_factura");
var Simulacion = /** @class */ (function () {
    function Simulacion() {
        //seleccionar un cliente aleatoreo de BDClientes
        var clienteAleatorio = backend_1.BDClientes.getInstance().getClientes()[Math.floor(Math.random() * backend_1.BDClientes.getInstance().getClientes().length)];
        var empresa = new empresa_1.Empresa("La Favorita", "1311311310001", "Manta", "0994717772");
        // Crear una cabecera de factura con la fecha actual, el cliente aleatorio y la empresa
        var cabeceraFactura = new cabecera_factura_1.CabeceraFactura(new Date(), clienteAleatorio, empresa);
        // Facturar con la cabecera de factura creada
        console.log("Iniciando simulación de facturación...");
        this.facturar(cabeceraFactura, this.populateDetalleFactura());
    }
    Simulacion.prototype.populateDetalleFactura = function () {
        // Aquí puedes implementar la lógica para poblar el detalle de la factura
        console.log("Poblando detalle de la factura...");
        // Por ejemplo, podrías agregar productos aleatorios al detalle de la factura
        var productos = backend_1.BDProductos.getInstance().getProductos();
        var detalleFactura = [];
        for (var i = 0; i < 5; i++) { // Simular 5 productos
            var productoAleatorio = productos[Math.floor(Math.random() * productos.length)];
            detalleFactura.push({
                producto: productoAleatorio,
                cantidad: Math.floor(Math.random() * 10) + 1 // Cantidad aleatoria entre 1 y 10
            });
        }
        console.log("Productos elegidos para facturar:");
        detalleFactura.forEach(function (item) {
            console.log("Producto: ".concat(item.producto.nombre, ", Cantidad: ").concat(item.cantidad));
        });
        return detalleFactura;
    };
    Simulacion.prototype.facturar = function (cabecera_factura, detalle_factura) {
        // Aquí puedes implementar la lógica para facturar
        console.log("################################################");
        console.log("Facturando...");
        // Por ejemplo, podrías crear una factura y calcular su total
        var factura = new factura_1.Factura(cabecera_factura, detalle_factura);
        // Simular la adición aleatorea de productos a la factura
        var productos = backend_1.BDProductos.getInstance().getProductos();
        console.log(factura.devolverDatos());
        console.log("################################################");
        console.log("Total de la factura: ");
        // Calcular el total de la factura
        console.log(factura.calcularTotal());
    };
    return Simulacion;
}());
exports.Simulacion = Simulacion;
