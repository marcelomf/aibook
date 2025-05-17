import os
from markdown_pdf import MarkdownPdf
from markdown_pdf import Section
import sys
import re
import glob, os

ebook_name = sys.argv[1]
readme = ""
summary = ""
ebook_dir = "../examples/"+ebook_name

def extrair_links_internos(markdown):
    # Regex para encontrar todos os links do tipo [texto](link)
    padrao = re.compile(r'\[([^\]]+)\]\((?!http)([^)]+)\)')
    return padrao.findall(markdown)

def summary_type(relative_path_md):
    if relative_path_md.count("/") == 0:
        return "CHAPTER"
    elif relative_path_md.count("/") == 1:
        return "TOPIC"
    elif relative_path_md.count("/") == 2:
        return "SUBTOPIC"
    else:
        raise Exception("Invalid summary type")

os.chdir(ebook_dir)

articles = list()

def render_subtopics(file):
    summary = ""
    with open(file, encoding='utf-8') as f: string_markdown = f.read()
    links = extrair_links_internos(string_markdown)
    for text, link in links:
        summary += "###### ["+text+"](#"+link.split(".md")[0]+")\n"
        articles.append(file.split("/")[0]+"/"+file.split("/")[1]+"/"+link)
    return summary

def render_topics(file):
    summary = ""
    with open(file, encoding='utf-8') as f: string_markdown = f.read()
    links = extrair_links_internos(string_markdown)
    for texto, link in links:
        summary += "##### "+ texto + "\n"+render_subtopics(file.split("/")[0]+"/"+link)+"\n"
    return summary

for file in glob.glob("*.md"):
    print(file)
    if file.endswith("README.md"):
        path_md = os.path.join(file)
        if relative_path_md[0] == '/':
              relative_path_md = relative_path_md[1:]

        with open(relative_path_md, encoding='utf-8') as f: string_markdown = f.read()
        readme+= string_markdown+"\n"
    if file.endswith("SUMMARY.md"):
          path_md = os.path.join(file)
          relative_path_md = path_md
          if relative_path_md[0] == '/':
              relative_path_md = relative_path_md[1:]

          with open(relative_path_md, encoding='utf-8') as f: string_markdown = f.read()
          links = extrair_links_internos(string_markdown)
          for texto, link in links:
              summary += "#### "+ texto + "\n"+render_topics(link)+"\n"

pdf = MarkdownPdf(toc_level=2, optimize=True)
pdf.add_section(Section(readme))
pdf.add_section(Section(summary))
for article in articles:
    article_md_id = article.split("/")[2].split(".md")[0]
    with open(article, encoding='utf-8') as f: string_markdown = f.read()
    article_with_link = "<a id='" + article_md_id + "'></a>" + string_markdown
    print(article_md_id)
    pdf.add_section(Section(article_with_link))

os.chdir(os.getcwd()+"/../../convert/")
pdf.save(ebook_name + ".pdf")