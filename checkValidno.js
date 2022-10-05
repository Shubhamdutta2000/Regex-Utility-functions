function checkValidno(phoneNo) {
    const phoneRE = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/; 
    if (phoneNo.match(phoneRE)) {
      return true; 
    } else {
      alert( "The phone number  is invalid!" );
      return false;
    }
  }
