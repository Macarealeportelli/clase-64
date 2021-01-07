// Filter
// 1
// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
// Mostrar el array original y el filtrado
// const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
// // codear acá la solución del ejercicio

const costos = [39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14];

const losMasCaros = costos.filter((elemento) => {
    return elemento > 50
})

console.log(costos);
console.log(losMasCaros);
// // deberia mostrar
// // [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// // [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]


// 2
// Tenemos un array en una variable numeros con números al azar.
// También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
// Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares

const masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];

const numerosPares = masNumeros.filter((elemento) => {
    return elemento % 2 === 0
});
const numerosImpares = masNumeros.filter((elemento) => {
    return elemento % 2 != 0
});


console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// // deberias tener como resultado
// // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// // impares: [43, 11, 37, 29, 9, 3, 37, 25]



// ARRAYS DE OBJETOS

// Crear un array nuevo con todas las alumnas que tengan menos de 25 años
// Guardar en una variable a la primera alumna cuyo nombre tenga mas de 4 letras
// Crear un booleano que diga si todas las alumnas tienen mas de 18 años
// Crear un booleano que diga si al menos una alumna tiene mas de 30 años


const alumnas = [
    {
        nombre: 'maca',
        edad: 22,
    },
    {
        nombre: 'marian',
        edad: 27,
    },
    {
        nombre: 'rosy',
        edad: 25,
    },
    {
        nombre: 'caro',
        edad: 28,
    },
    { nombre: 'angie', edad: 38 },
    { nombre: 'dani', edad: 24 }
];


const menoresDe25 = alumnas.filter((elemento) => {
    return elemento.edad < 25
})

console.log(menoresDe25)

const nombreMasDeCuatroLetras = alumnas.find((elemento) => {
    return elemento.nombre.length > 4
})

console.log(nombreMasDeCuatroLetras)

const mayoresDe18 = alumnas.every((elemento) => {
   return elemento.edad > 18 
})

console.log(mayoresDe18)

const algunaMasDe30 = alumnas.some((elemento)=>{
    return elemento.edad >30
})

console.log(algunaMasDe30)