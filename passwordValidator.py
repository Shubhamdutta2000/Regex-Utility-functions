import re
  
the_password = 'Snehomoy100@'
reg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$"
      
# compiling & making it a regex object
compiled_object = re.compile(reg)
      
# searching regex on that object using regex search function                 
seach_result = re.search(compiled_object, the_password)


if seach_result:
    print("Password is valid.")
else:
    print("Password invalid !!")