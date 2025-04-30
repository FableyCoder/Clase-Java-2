document.writeln("<h1> Clase 2 JavaScript </h1>")

// crear arreglo con 20 numeros

let arrayNumeros=[]

for(let i=0;i<=20;i++){
    arrayNumeros.push(i*2)
}

console.log(arrayNumeros)

// Sumar items de un arreglo

let edades=[21,8,5,15,44]

let suma=0

edades.forEach(funsuma)

function funsuma(item){
    suma+=item
    console.log(suma)
}

console.log("La suma es",suma)

// Ejercicio: 

let alumno=["Ana","Carlos","Javier","Pablo","Felipe"]
let notas=[6.7,4.5,5.5,6.6,7.0]

// Mostrar el nombre y la nota del alumno con mayor nota

let maxnota=0

let mejalumno=""

let index=0

notas.forEach(notasalumnos)

alumno.forEach(mejornota)

function notasalumnos(){
    for(let i=0;i<notas.length;i++)
        if(notas[i]>maxnota){
            maxnota=notas[i]
            index=i
        }
}

function mejornota(){
    for(let i=0;i<alumno.length;i++)
        if(i=index)
            mejalumno=alumno[i]
}

console.log(mejalumno,"obtuvo la mayor nota con un",maxnota)