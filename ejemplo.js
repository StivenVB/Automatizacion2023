var myCar = {
    Marca: "Chevrolet",
    Modelo: "2023",
    Color: "Gris"
};

function imprimirDatosDelCarro(carro) {
    console.log("Marca: " + carro.Marca);
    console.log("Modelo: " + carro.Modelo);
    console.log("Color: " + carro.Color);
}

function actualizarModelo(carro, nuevoModelo) {
    carro.Modelo = nuevoModelo;
    console.log("¡Modelo actualizado con éxito!");
}

// Llamamos a la función para imprimir los datos antes de la actualización
console.log("Datos antes de la actualización:");
imprimirDatosDelCarro(myCar);

// Llamamos a la función para actualizar el modelo
actualizarModelo(myCar, "2024");

// Llamamos a la función para imprimir los datos después de la actualización
console.log("Datos después de la actualización:");
imprimirDatosDelCarro(myCar);
