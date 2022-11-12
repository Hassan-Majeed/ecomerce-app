const FormatPrice = ({ price }) => {
    return Intl.NumberFormat('ur-PK', {
        style: 'currency',
        currency: 'pkr',
        maximumFractionDigits: 2
    }).format(price / 100)
}

export default FormatPrice;
