import re

def extract_urls(text):
    url_regex = r'https?://[^\s/$.?#].[^\s]*|www\.[^\s/$.?#].[^\s]*'
    return re.findall(url_regex, text)

text = "Visit my website at https://www.example.com or check out https://anotherexample.com"
urls = extract_urls(text)
print(urls)
