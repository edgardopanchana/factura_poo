"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BDProductos = exports.BDClientes = void 0;
var cliente_1 = require("./cliente");
var producto_1 = require("./producto");
var BDClientes = /** @class */ (function () {
    function BDClientes() {
        this.clientes = [];
        this.clientes = [];
        this.populateClientes();
    }
    BDClientes.getInstance = function () {
        if (!BDClientes.instance) {
            BDClientes.instance = new BDClientes();
        }
        return BDClientes.instance;
    };
    BDClientes.prototype.addCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    BDClientes.prototype.getClientes = function () {
        return this.clientes;
    };
    BDClientes.prototype.getClienteById = function (ruc) {
        return this.clientes.find(function (cliente) { return cliente.ruc === ruc; });
    };
    BDClientes.prototype.updateCliente = function (ruc, updatedCliente) {
        var index = this.clientes.findIndex(function (cliente) { return cliente.ruc === ruc; });
        if (index !== -1) {
            this.clientes[index] = __assign(__assign({}, this.clientes[index]), updatedCliente);
        }
    };
    BDClientes.prototype.deleteCliente = function (ruc) {
        this.clientes = this.clientes.filter(function (cliente) { return cliente.ruc !== ruc; });
    };
    BDClientes.prototype.populateClientes = function () {
        this.addCliente(new cliente_1.Cliente("Juan Pueblo", "1311311310001", "Manta", "0994717772"));
        this.addCliente(new cliente_1.Cliente("Maria Perez", "1311311310002", "Guayaquil", "0994717773"));
        this.addCliente(new cliente_1.Cliente("Pedro Lopez", "1311311310003", "Quito", "0994717774"));
        this.addCliente(new cliente_1.Cliente("Ana Garcia", "1311311310004", "Cuenca", "0994717775"));
        this.addCliente(new cliente_1.Cliente("Luis Martinez", "1311311310005", "Loja", "0994717776"));
    };
    return BDClientes;
}());
exports.BDClientes = BDClientes;
var BDProductos = /** @class */ (function () {
    function BDProductos() {
        this.productos = [];
        this.productos = [];
        this.populateProductos();
    }
    BDProductos.getInstance = function () {
        if (!BDProductos.instance) {
            BDProductos.instance = new BDProductos();
        }
        return BDProductos.instance;
    };
    BDProductos.prototype.addProducto = function (producto) {
        this.productos.push(producto);
    };
    BDProductos.prototype.getProductos = function () {
        return this.productos;
    };
    BDProductos.prototype.getProductoById = function (codigo) {
        return this.productos.find(function (producto) { return producto.codigo === codigo; });
    };
    BDProductos.prototype.updateProducto = function (codigo, updatedProducto) {
        var index = this.productos.findIndex(function (producto) { return producto.codigo === codigo; });
        if (index !== -1) {
            this.productos[index] = __assign(__assign({}, this.productos[index]), updatedProducto);
        }
    };
    BDProductos.prototype.deleteProducto = function (codigo) {
        this.productos = this.productos.filter(function (producto) { return producto.codigo !== codigo; });
    };
    BDProductos.prototype.populateProductos = function () {
        this.addProducto(new producto_1.Producto("001", "Producto 1", 10));
        this.addProducto(new producto_1.Producto("002", "Producto 2", 20));
        this.addProducto(new producto_1.Producto("003", "Producto 3", 30));
        this.addProducto(new producto_1.Producto("004", "Producto 4", 40));
        this.addProducto(new producto_1.Producto("005", "Producto 5", 50));
    };
    return BDProductos;
}());
exports.BDProductos = BDProductos;
