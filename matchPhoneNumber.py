import re

## Mobile Number Validation
phn_np = "+919345678901"
pattern = re.compile("^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$")

check = pattern.match(phn_no)
