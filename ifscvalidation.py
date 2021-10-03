import re
def isValidIFSCode(str):
    regex = "^[A-Z]{4}0[A-Z0-9]{6}$"
    p = re.compile(regex)
    if (str == None):
        return False
    if(re.search(p, str)):
        return True
    else:
        return False
str1 = "Codetobechecked"
print(isValidIFSCode(str1))
