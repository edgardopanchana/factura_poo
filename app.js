"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = require("./backend");
var simulacion_1 = require("./simulacion");
console.log("Retornando datos del clientes registrados en la BD");
backend_1.BDClientes.getInstance().getClientes().forEach(function (element) {
    console.log(element.retornarDatos());
});
console.log("Retornando datos de productos registrados en la BD");
backend_1.BDProductos.getInstance().getProductos().forEach(function (element) {
    console.log(element.retornarDatos());
});
//iniciar simulacion
var iniciarSimulacion = new simulacion_1.Simulacion();
