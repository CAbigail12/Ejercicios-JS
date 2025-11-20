function agravity() { //Mi funcion
    let estudianteAgravity = "Stack Mean";  // Aquí asigno la variable local, es decir dentro de la función
    console.log(estudianteAgravity); // imprimo la viariable
}
agravity(); // Aquí llamo la función


function misDatos() { //Mi funcion
    let miNombre = "Hola soy Abigail";  // Aquí asigno la variable local, es decir miNombre
    console.log(miNombre); // imprimo los datos
}
misDatos(); // Aquí llamo la función

function miFuncion() { //Mi funcion
    let localVar = 'hola desde variable local'; // Aquí asigno la variable local
    console.log(localVar); // imprimo los datos
}

miFuncion(); // aquí imprime mi una variable local
console.log(localVar); // Este no más manda un mensaje de error si la variable local no esta definida o no esta asignado globalmente.
//en este caso aunque la viriable si existe, pero no esta en la global, sino localemnte








