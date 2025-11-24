/*Normalemente en bloques se usan llaves, como variables let y const
declaraciones de if, for while*/

{
    let anoNacimiento = 2002;       // esta variable sería tipo bloque
    const departamento = "Solola";  


    console.log(anoNacimiento);  // Se puede usar dentro del bloque
    console.log(departamento);
}

console.log(anoNacimiento); //Este nomás muestra un mensaje que no existe fuera del bloque
console.log(departamento); 


function miBloque() {
    if (true) {
        let bloqueVar = 'Soy una variable de bloque';
        console.log(bloqueVar); // se imprime aquí 
    }
    console.log(bloqueVar); // Error: bloqueVar no está definida
}

miBloque();

/*
let anoNacimiento;  // Declarando variable global
let departamento;   // Declarando variable

{
    anoNacimiento = 2002;   // Asignación dentro del bloque
    console.log(anoNacimiento);  // aquí dentro del bloque
}

console.log(anoNacimiento); // fuera del bloque


{
    departamento = "Sololá";   // Asignación dentro del bloque
    console.log(departamento); // aquí dentro del bloque
}

console.log(departamento); // fuera del bloque
*/











