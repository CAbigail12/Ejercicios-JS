//Ejemplo con declaración if 
let edad = 18;

if (edad >= 18) { // aquí se asigna la condición
    console.log("Es mayor de edad"); // se imprime 
}



function bloqueEjemplo() {
    if (true) {
        let bloqueVar = 'Soy una variable de bloque'; //Aqui asigno variable bloque
        console.log(bloqueVar); // Es valido aquí tambien la variable
    }
    console.log(bloqueVar); // Este no mas muestra error bloqueVar que no está definida
}
bloqueEjemplo();


if (true) {
    let saludo = "Hola!";
    console.log(saludo); // este si funciona 
}

console.log(saludo); // muestra error que la variable solo existe dentro del if

