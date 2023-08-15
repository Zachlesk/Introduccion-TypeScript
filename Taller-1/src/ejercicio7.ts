// Programa que pida el ingreso del nombre y precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
// en su factura. 

import * as readlineSync from 'readline-sync';

interface Producto {
  nombre: string;
  precio: number;
}

function facturacion(): Producto {
  let nombreProducto = readlineSync.question('Ingrese el nombre del articulo: ');
  let precioProducto = parseFloat(readlineSync.question('Ingrese el precio del articulo: '));

  return {
    nombre: nombreProducto,
    precio: precioProducto
  };
}


function main() {
  let nombreCliente = readlineSync.question('Ingrese el nombre del cliente: ');
  let cantidadProductos = parseInt(readlineSync.question('Ingrese la cantidad de productos: '));

  let productos: Producto[] = [];

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
  };
}
main();