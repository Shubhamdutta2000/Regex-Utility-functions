

const link1 = "https://www.linkedin.com/feed/"

const link2 = "this is not valid link"

function UrlValidator(link){
    const pattern = new RegExp('^(https?:\\/\\/)?'+ 
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
            '(\\#[-a-z\\d_]*)?$','i');

            if(pattern.test(link)){
                return true
            }
            else{
                return false
            }
}


console.log(UrlValidator(link1)); // It will return true


console.log(UrlValidator(link2));// It will return false