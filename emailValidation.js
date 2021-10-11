// Email Validation with regex

validateEmail("testing@test.com"); // Must be a string

function validateEmail(email) {
  //make sure its a string and guarantee it's lowercase
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    String(email).toLowerCase()
  );
  if (email.match(emailFormat)) {
    alert("Cool email!");
    return true;
  }
  alert("Is this an email account?");
  return false;
}
