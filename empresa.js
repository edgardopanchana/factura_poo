"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nombre, ruc, direccion, telefono) {
        this.nombre = nombre;
        this.ruc = ruc;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    Empresa.prototype.devolverDatos = function () {
        return "Nombre: ".concat(this.nombre, "\nRUC: ").concat(this.ruc, "\nDireccion: ").concat(this.direccion, "\nTelefono: ").concat(this.telefono);
    };
    return Empresa;
}());
exports.Empresa = Empresa;
