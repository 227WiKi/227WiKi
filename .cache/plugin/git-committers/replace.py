import os
import re
from tqdm import tqdm
from bs4 import BeautifulSoup
old_str="https://avatars.githubusercontent.com"
new_str="https://avatars.227wiki.eu.org"
dir=os.getcwd()
def list_files(directory):
    file_list = []
    for root, dirs, files in os.walk(directory):
        for file_name in files:
            file_path = os.path.join(root, file_name)
            file_list.append(file_path)
    return file_list

if __name__ == "__main__":
    f=list_files(dir)
    for i in tqdm(f):
        if i.endswith('.json'):
            with open(i, 'r', encoding='utf-8') as f1,open("%s.bak" % i, "w", encoding="utf-8") as f2:
                content=f1.read()
                content=content.replace(old_str,new_str)
                f2.write(content)
            os.remove(i)
            os.rename("%s.bak" % i, i)



