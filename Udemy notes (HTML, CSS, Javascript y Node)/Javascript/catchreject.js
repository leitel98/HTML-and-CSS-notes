Promise.reject(2)
    .then(valor => valor + 1)
    .then(valor => console.log(valor))
    // reject salta directo al catch
    .catch(e =>console.error(e))
    // si ponemos reject sin catch lanza error de uncaught promise
    // lo usamos cuando hay un error en la api

Promise.resolve(2)
    .then(valor => valor +1)
    .then(valor => Promise.reject(valor))
    .catch(e => console.error(e))

Promise.resolve(2)
    .then(valor => Promise.reject(1))
    // yo puedo interrumpir cuando quiera, esto dara 1
    .then(valor => valor +2)
    .catch(e => console.error(e))

    // new promise(resolve, reject)

    new Promise((resolve, reject) => {
        // Si pongo resolve nos mostrara 2 luego de un segundo
        // si pongo reject nos mostrara 2 con error
        setTimeout(() => resolve(2), 1000)
    })
        .then(x => console.log(x))
        .catch(e => console.error(e))
