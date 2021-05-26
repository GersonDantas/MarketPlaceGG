const formatValue = value =>
  Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)

export default formatValue
// localeMatcher: "best fit",
//     minimumFractionDigits: 2,
//     minimumIntegerDigits: 1,
//     useGrouping: true
