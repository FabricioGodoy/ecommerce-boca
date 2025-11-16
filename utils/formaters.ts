export const formatCurrency = (currency: number) => {
    return Intl.NumberFormat("es-ar", { style: "currency", currency: "ARS" }).format(currency)
}

export const formatNumber = (number: number) => {
    return new Intl.NumberFormat("es-ar").format(number)
}