let repetir = true; 

while (repetir) {
    console.log("Responde las siguientes preguntas:");

    let nombreCompleto = prompt("¿Cuál es tu nombre completo?");
    console.log(`Nombre completo: ${nombreCompleto}`);

    let edad = prompt("¿Cuál es tu edad?");
    console.log(`Edad: ${edad}`);

    let pregunta3 =  prompt("¿De que Pais eres?");
    console.log(`De dónde eres: ${deDondeEres}`);

    let pregunta4 = prompt("¿Cuál es tu comida favorita?");
    console.log(`comida: ${pregunta4}`);

    let pregunta5 = prompt("¿Cuál es tu animal favorito?");
    console.log(`Animal favorito: ${animalFavorito}`);

    // Solicitud de modificacion
    let continuar = prompt("¿Quieres modificar algo? (sí/no)");
    if (continuar.toLowerCase() !== "sí") {
        repetir = false;
    }
}

console.log("Gracias por participar");