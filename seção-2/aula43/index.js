function somar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parâmetros inválidos')
    }
    return a + b
}

try {
    console.log(somar(10, 's'))
} catch(error) {
    console.log(error)
}