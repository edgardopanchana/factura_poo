"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura(cabeceraFactura, detalleFactura) {
        if (detalleFactura === void 0) { detalleFactura = []; }
        this.detalleFactura = [];
        this.cabeceraFactura = cabeceraFactura;
        this.detalleFactura = detalleFactura;
    }
    Factura.prototype.calcularTotal = function () {
        var total = 0;
        for (var i = 0; i < this.detalleFactura.length; i++) {
            total += this.detalleFactura[i].producto.precio * this.detalleFactura[i].cantidad;
        }
        return total;
    };
    Factura.prototype.devolverDatos = function () {
        var datos = "Fecha: ".concat(this.cabeceraFactura.fecha, "\n");
        datos += "RUC: ".concat(this.cabeceraFactura.empresa.ruc, "\n");
        datos += "Empresa: ".concat(this.cabeceraFactura.empresa.nombre, "\n");
        datos += "Nombre Cliente: ".concat(this.cabeceraFactura.cliente.nombre, "\n");
        datos += "RUC: ".concat(this.cabeceraFactura.cliente.ruc, "\n");
        datos += "Direccion: ".concat(this.cabeceraFactura.cliente.direccion, "\n");
        datos += "Telefono: ".concat(this.cabeceraFactura.cliente.telefono, "\n");
        datos += "Detalles de la factura:\n";
        datos += "PRODUCTO-\tCANTIDAD-\tSUBTOTAL\n";
        for (var i = 0; i < this.detalleFactura.length; i++) {
            datos += "".concat(this.detalleFactura[i].producto.nombre, "\t-\t").concat(this.detalleFactura[i].cantidad, "\t-\t").concat(this.detalleFactura[i].producto.precio * this.detalleFactura[i].cantidad, "\n");
        }
        return datos;
    };
    return Factura;
}());
exports.Factura = Factura;
