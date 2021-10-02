import re # the RegEx module in Pyhton

sample_pattern = '^s...z$'
string_to_be_tested = 'snehomoy'
result = re.match(sample_pattern, string_to_be_tested) # for matching the string with the pattern


if result:

  print("Congratulations, the Search was successful...!")

else:

  print("Oops, the search was unsuccessful...!")	

