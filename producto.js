"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    Producto.prototype.retornarDatos = function () {
        return "Codigo: " + this.codigo +
            " Nombre: " + this.nombre +
            " Precio: " + this.precio;
    };
    return Producto;
}());
exports.Producto = Producto;
