// The same IFSC checking but with a taste of js in it :)


$(document).ready(function(){     
        
    $(".ifsc").change(function () {      
    var inputvalues = $(this).val();      
      var reg = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;    
                    if (inputvalues.match(reg)) {    
                        return true;    
                    }    
                    else {    
                         $(".ifsc").val("");    
                        alert("You entered invalid IFSC code");    
                        //document.getElementById("txtifsc").focus();    
                        return false;    
                    }    
    });      
        
    });    