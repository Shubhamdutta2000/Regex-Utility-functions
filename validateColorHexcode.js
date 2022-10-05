const validateColorHexcode = (colorHexcode) => {
  const pattern = /^#?([a-f0-9A-F]{6}|[a-f0-9A-F]{3})$/

  return pattern.test(colorHexcode)
}

console.log(validateColorHexcode("#0A1B2C")) // true
console.log(validateColorHexcode("#0A1J2C")) // false
