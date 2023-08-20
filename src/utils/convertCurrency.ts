function convertCurrency(value: number) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}

export default convertCurrency