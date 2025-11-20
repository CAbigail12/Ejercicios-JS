//Ejemplo simple 

let miGlobal = "Aquí saluda Abigail"; //Aquí se declara la variable, en este caso global
console.log(miGlobal); //Aquí estoy imprimiendo la variable 

let otroGolbal = "Tengo 23 años";
console.log(otroGolbal);

let miEdad = 23;
console.log(miEdad);


//otro ejemplo, algo un poco más extenso, esto 

let nombre = "Abigail"; //Aquí se declara la variable, en este caso global con un string 

function mostrarNombre() { // Esta función puede entrar a la variable global
    console.log(nombre); // Aquí llama a la variable global que es nombre
}
mostrarNombre(); // aquí solo llama la función, luego impime el nombre


//otro ejemplo
let globalVar = 'Soy una variable global'; //Aquí asigno variable de manera global

function mostrarGlobal() { 
    console.log(globalVar); // puede imprimir la variable desde aquí ya que es global
}

mostrarGlobal(); // aquí imprime 
console.log(globalVar); // También puede imprirmir la variable aquí, porque es global
//Al final imprime 2 veces Soy una viariable global 


