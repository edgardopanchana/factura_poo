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
    Cliente.prototype.retornarDatos = function () {
        return "Nombre: " + this.nombre +
            " RUC: " + this.ruc +
            " Direccion: " + this.direccion +
            " Telefono: " + this.telefono;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
