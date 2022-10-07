// A hex string consissts of numbers 0-9 and characters a-f
// Hex strings are used at manay places such as github commits, MongoDB's ObjectId, RGB color codes ...

const isValidHex = (str) => {
  const hexRegExp = new RegExp("^[0-9a-f]+$", "i");

  return hexRegExp.test(str);
};

console.log(isValidHex("88fe")); // true
console.log(isValidHex("88fn")); // false
console.log(isValidHex("88f&")); // false
console.log(isValidHex("8899")); // true
console.log(isValidHex("debe")); // true

// some specific use cases

const isValidHexColor = (testColorStr) => {
  const testRe = /^#[0-9a-f]{6}/i;

  return testRe.test(testColorStr);
};

console.log(isValidHexColor("#a3b199")); // true
console.log(isValidHexColor("#000000")); // true
console.log(isValidHexColor("#fedcba")); // true
console.log(isValidHexColor("fefefe")); // false
console.log(isValidHexColor("#awc99")); // false
console.log(isValidHexColor("aec99")); // false

const findCommitHashes = (str) => {
  const commitRe = new RegExp("[0-9a-z]{40}","g");

  return typeof str === "string" ? str.match(commitRe) || [] : [];
};

console.log(findCommitHashes("The issue found is in the eaffd71de3b4d5026152a2ed84f22408d9f09074 commit made last month.")); // [ 'eaffd71de3b4d5026152a2ed84f22408d9f09074' ]

console.log(findCommitHashes("The bug introduced in release was made in the commit 11d936e8bf44c44a4b401f565baf438264119ae7e, not in 882de701ebafe760897bdf445e608a21457ce269")); // ['11d936e8bf44c44a4b401f565baf438264119ae7','882de701ebafe760897bdf445e608a21457ce269']

console.log(findCommitHashes("Found missing files in the test branch")) // []