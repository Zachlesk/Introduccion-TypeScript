"use strict";
// Programa que pida el ingreso del nombre y precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
// en su factura. 
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
function facturacion() {
    let nombreProducto = readlineSync.question('Ingrese el nombre del articulo: ');
    let precioProducto = parseFloat(readlineSync.question('Ingrese el precio del articulo: '));
    return {
        nombre: nombreProducto,
        precio: precioProducto
    };
}
function main7() {
    let nombreCliente = readlineSync.question('Ingrese el nombre del cliente: ');
    let cantidadProductos = parseInt(readlineSync.question('Ingrese la cantidad de productos: '));
    let productos = [];
    for (let i = 0; i < cantidadProductos; i++) {
        console.log(`Ingrese los detalles del producto ${i + 1}:`);
        let producto = facturacion();
        productos.push(producto);
    }
    let totalFactura = 0;
    console.log('Productos en la factura:');
    for (let producto of productos) {
        let cantidadComprada = parseInt(readlineSync.question(`Ingrese la cantidad de ${producto.nombre} que se compró: `));
        let subtotal = producto.precio * cantidadComprada;
        totalFactura += subtotal;
        console.log(`
    -------------------------------------------------";
   "El día de hoy, siendo el mes x, del año 2023";
   "-------------------------------------------------";
   "El cliente ${nombreCliente} lleva a su cargo: ";
   "-------------------------------------------------";
   "Articulo: ${producto.nombre}";
   "Cantidad por unidad del articulo: ${cantidadComprada}";
   "Precio por unidad del articulo: ${producto.precio}";
   "-------------------------------------------------";
   "Total a pagar: ";
   " ${totalFactura}";
   "-------------------------------------------------"}`);
    }
    ;
}
main7();
