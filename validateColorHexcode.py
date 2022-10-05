import re
str = '#ffffff' # Your Hex

match = re.search(r'^#(?:[0-9a-fA-F]{3}){1,2}$', str)

if match:                      
  print 'Hex is valid'

else:
  print 'Hex is not valid'
