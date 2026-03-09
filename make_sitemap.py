import os
from datetime import datetime

# --- CONFIGURATION ---
DOMAIN = "https://robinsonlawncare.com" #
PROJECT_DIR = "." 
PAGES_DIR = "pages" # Matches your folder in the screenshot
OUT_FILE = "sitemap.xml"

# Files you don't want search engines to list
EXCLUDE_FILES = ["404.html", "CNAME", "extra.html", "door-hanger.html"]

def format_entry(url, priority):
    """Formats a single URL entry for the XML file."""
    today = datetime.now().strftime("%Y-%m-%d")
    return f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <priority>{priority}</priority>
  </url>\n"""

def generate_sitemap():
    print("Generating sitemap...")
    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    # 1. Process Root Files (index.html, extra.html)
    for filename in os.listdir(PROJECT_DIR):
        if filename.endswith(".html") and filename not in EXCLUDE_FILES:
            if filename == "index.html":
                url = DOMAIN
                priority = "1.0"
            else:
                url = f"{DOMAIN}/{filename.replace('.html', '')}"
                priority = "0.8"
            sitemap_content += format_entry(url, priority)

    # 2. Process the "pages" Folder (mowing.html, contact.html, etc.)
    if os.path.exists(PAGES_DIR):
        for filename in os.listdir(PAGES_DIR):
            if filename.endswith(".html") and filename not in EXCLUDE_FILES:
                # This creates links like: robinsonlawncare.com/pages/mowing
                url = f"{DOMAIN}/pages/{filename.replace('.html', '')}"
                priority = "0.7"
                sitemap_content += format_entry(url, priority)

    sitemap_content += "</urlset>"

    with open(OUT_FILE, "w") as f:
        f.write(sitemap_content)
    
    print(f"Success! {OUT_FILE} has been created in your folder.")

if __name__ == "__main__":
    generate_sitemap()