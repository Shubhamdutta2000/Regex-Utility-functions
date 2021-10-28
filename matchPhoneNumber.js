function matchPhoneNumber(phn_np) {
  var pattern = /^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/;
  if(phn_np.value.match(pattern)) {
    return true;
  }  
  else {  
    alert("message");
    return false;
  }
}