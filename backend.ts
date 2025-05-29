import { Cliente } from "./cliente";
import { Producto } from "./producto";

export class BDClientes {
    
    private clientes: Cliente[] = [];

    // Singleton pattern to ensure only one instance of BDClientes
    private static instance: BDClientes;
    public static getInstance(): BDClientes {
        if (!BDClientes.instance) {
            BDClientes.instance = new BDClientes();
        }
        return BDClientes.instance;
    }

    private constructor() {
        this.clientes = [];
        this.populateClientes();
    }

    public addCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

    public getClienteById(ruc: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.ruc === ruc);
    }

    public updateCliente(ruc: string, updatedCliente: any): void {
        const index = this.clientes.findIndex(cliente => cliente.ruc === ruc);
        if (index !== -1) {
            this.clientes[index] = { ...this.clientes[index], ...updatedCliente };
        }
    }

    public deleteCliente(ruc: string): void {
        this.clientes = this.clientes.filter(cliente => cliente.ruc !== ruc);
    }

    populateClientes(): void {
        this.addCliente(new Cliente("Juan Pueblo", "1311311310001", "Manta", "0994717772"));
        this.addCliente(new Cliente("Maria Perez", "1311311310002", "Guayaquil", "0994717773"));
        this.addCliente(new Cliente("Pedro Lopez", "1311311310003", "Quito", "0994717774"));
        this.addCliente(new Cliente("Ana Garcia", "1311311310004", "Cuenca", "0994717775"));
        this.addCliente(new Cliente("Luis Martinez", "1311311310005", "Loja", "0994717776"));
    }
}

export class BDProductos{
    private productos: Producto[] = [];
    // Singleton pattern to ensure only one instance of BDProductos
    private static instance: BDProductos;
    public static getInstance(): BDProductos {
        if (!BDProductos.instance) {
            BDProductos.instance = new BDProductos();
        }
        return BDProductos.instance;
    }
    private constructor() {
        this.productos = [];
        this.populateProductos();
    }
    public addProducto(producto: Producto): void {
        this.productos.push(producto);
    }
    
    public getProductos(): Producto[] {
        return this.productos;
    }
    public getProductoById(codigo: string): Producto | undefined {
        return this.productos.find(producto => producto.codigo === codigo);
    }
    public updateProducto(codigo: string, updatedProducto: any): void {
        const index = this.productos.findIndex(producto => producto.codigo === codigo);
        if (index !== -1) {
            this.productos[index] = { ...this.productos[index], ...updatedProducto };
        }
    }
    public deleteProducto(codigo: string): void {
        this.productos = this.productos.filter(producto => producto.codigo !== codigo);
    }
    populateProductos(): void {
        this.addProducto(new Producto("001", "Producto 1", 10));
        this.addProducto(new Producto("002", "Producto 2", 20));
        this.addProducto(new Producto("003", "Producto 3", 30));
        this.addProducto(new Producto("004", "Producto 4", 40));
        this.addProducto(new Producto("005", "Producto 5", 50));
    }

}