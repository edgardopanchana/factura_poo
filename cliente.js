"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, ruc, direccion, telefono) {
        this.nombre = nombre;
        this.ruc = ruc;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    Cliente.prototype.imprimirCliente = function () {
        console.log("Nombre: " + this.nombre);
        console.log("RUC: " + this.ruc);
        console.log("Direccion: " + this.direccion);
        console.log("Telefono: " + this.telefono);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
