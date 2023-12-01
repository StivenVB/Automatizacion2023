var myCar = {
    Marca: "Chevrolet",
    Modelo: "2023",
    Color: "Gris"
}

function imprimirDatosDelCarro(carro) {
    console.log("Marca: " + carro.Marca);
    console.log("Modelo: " + carro.Modelo);
    console.log("Color: " + carro.Color);
}

// Llamamos a la función con los datos de tu automóvil
imprimirDatosDelCarro(myCar);