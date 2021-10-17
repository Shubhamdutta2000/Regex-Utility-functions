function domainChecker(string)
{
 pattern = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
  
        if (pattern.test(string))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(domainChecker('www.souvik.com')); //It will return true

console.log(domainChecker('www.souvik.sen.me')); //It will return true

console.log(domainChecker('http://www.souvik.com')); //It will return false

console.log(domainChecker('https://www.souvik.com')); //It will return false

console.log(domainChecker('www.souvik.com')); //It will return true