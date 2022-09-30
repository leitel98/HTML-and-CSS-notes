//se utilizara en otra funcion como callback

function add (a, b, cb) {
    const r = a + b
    cb(r)
}

add(2, 3, function (r) {
    console.log('soy una func anon, res es', r)
})