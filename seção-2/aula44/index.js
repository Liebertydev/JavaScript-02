function retornarData(data) {
    if (data && !(data instanceof Date)) {
        throw new Error('Esperando uma instância de data')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('2025-08-12 15:45:10')
    const hora = retornarData()
    console.log(hora)
} catch (error) {
    console.log(error)
}