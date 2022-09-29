let age = 8
if (age > 5) {
    console.log('age is over 5');
} else {
    console.log('this is false');
}

while (age < 10) {
    console.log('age is '+age);
    age++
}

switch (1) { //lo que hay dentro del parentesis es el caso que aplicara
    case 1: {
        console.log('case 1')
        break
    }
    case 2: {
        console.log('case 2')
        break
    }
    case 3:
        console.log('case 3')
        break
    default:
        console.log('default')
        break
}

for (let i = 0; i < 10; i++) { //toma 3 parametros, define la variable, condicion y accion final
    console.log(i)
}