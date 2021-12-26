var value = '2 '

var lista = new Array

for (var item in value) {
    lista.push(value[item])
}

// Transformar lista em valores 
let primeiro = new Array;
let sinal;
let segundo = new Array;

for (var a = 0; a < lista.length; a++) {
    if (lista[a] == " ") {
        sinal = lista[a+1]
        for (var b = 0; b < a; b++) {
            primeiro.push(lista[b])
        }
        for(var c = a+3; c < lista.length; c++) {
            segundo.push(lista[c])
        }
        break;
    }
}

primeiro = parseFloat(primeiro.join(''))
segundo = parseFloat(segundo.join(''))


console.log(lista)
console.log('peimeiro', primeiro)
console.log('sinal', sinal)
console.log('segundo', segundo)

if (isNaN(segundo)) {
    console.log(true)
}else{
    console.log(false)
}