function suma (a, b) {
    return a + b;//hay que indicar return si quiero usar luego el valor
}

//se pueden almacenar los resultados de las funciones como valores, porque son valores y se pueden
//pasar como args a otras fx
const res = suma(1, 2)//3
const res2 = suma(5, 6)//11
const res3 = suma(res, res2)
console.log('resultado', res3)

//callback es una funcion que se ejecutara al final de una funcion
function add (a, b, cb) {
    const r = a+b
    cb(r)
}

function callback(result) {
    console.log('resultado', result);
}

//se agrega la fx de calback que es pequena para poder reutilizar code
add(2, 3, callback)