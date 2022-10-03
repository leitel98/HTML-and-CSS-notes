// indico que el valor lo tendre resuelto
Promise.resolve(2)
    .then(valor => valor + 1)
    .then(valor => console.log(valor))
// encadeno y modifico los valores
    