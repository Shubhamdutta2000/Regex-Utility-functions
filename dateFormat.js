// Date Format check with regex
const dateFormat = /\d\d-\w+-\d\d\d\d/;
const dateInp = "10-02-2021"

const check4 = dateFormat.test(dateInp);
