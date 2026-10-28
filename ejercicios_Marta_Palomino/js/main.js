/* EJERCICIO 1 ENUNCIADO:
Escribir un programa que pregunte al usuari@ en un prompt por un número entero positivo y le devuelva en un alert 
la cuenta atrás desde ese número hasta 0 en una lista separada por puntos. 
El programa debe llamar a una función calcularLista(numeroFinal) que recorra con un bucle la cuenta atrás y devuelva 
el resultado en un string o cadena de caracteres. 
En lugar de 0, el programa puede devolver “¡pum!”, por ejemplo “5 . 4 . 3 . 2 . 1 . ¡Pum!”.  
	•	Nota: recuerda iniciar la cadena de caracteres con un valor vacío “”;
	•	Nota: recuerda que para programar una cuenta atrás, el contador debe decrementarse en lugar de incrementarse. */

let numeroUsuario = prompt('Dime un número entero positivo');

function calcularLista(numeroFinal) {
    let resultado = "";

    for (let i = numeroFinal; i >= 0; i--) {
        resultado += i + ".";
        if (i != 0) {
    resultado += i + " . ";
} else {
    resultado += i + " ¡PUM! ";
}
    }

    return (resultado);
}

alert (calcularLista(numeroUsuario));

