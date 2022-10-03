// generar copia exacta de un objeto pero que esta no altere la anterior
const a = { b: 1}
const b = a
b.c = 2
console.log(b.c)
console.log(a.c)
// como podemos ver, a y b son coodependientes

const c = {...a}
// toma las propiedades de a y asignaselas

c.d = 12
// ahora esto solo lo tiene c, son objetos distintos