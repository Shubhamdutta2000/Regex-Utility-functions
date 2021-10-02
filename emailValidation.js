// Email Validation with regex
const reg2 = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
const input = "shubham@gmail.com"

const check3 = reg2.test(input) // returns true