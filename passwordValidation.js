function passwordValidation(password) {
  return (
    /^[A-Za-z0-9]{6,}$/.test(password) && //six characters at least
    /[A-Z]+/.test(password) && //lowercase letter
    /[a-z]+/.test(password) && //uppercase letter
    /[0-9]+/.test(password) //contains a number
  );
}
