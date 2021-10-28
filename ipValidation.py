import re

regex = "^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$"

def check(Ip):
	if(re.search(regex, Ip)):
		print("Valid Ip address")
		
	else:
		print("Invalid Ip address")
	
if __name__ == '__main__' :

	# It will return true
	check("127.0.0.1")

	# It will return false
	check("225")
