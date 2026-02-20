import urllib.request
from PIL import Image
import os

twemojs = {
    "bee_returns_box.png": "1f4e6",
    "bee_grocery_bag.png": "1f6cd",
    "bee_dry_cleaning.png": "1f455",
    "bee_pharmacy_pill.png": "1f48a",
    "bee_post_office_mail.png": "2709"
}

base_bee = Image.open("public/bee-new-2.png").convert("RGBA")
w, h = base_bee.size

for filename, hexcode in twemojs.items():
    url = f"https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/{hexcode}.png"
    icon_path = f"tmp_{hexcode}.png"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(icon_path, 'wb') as out_file:
                out_file.write(response.read())
        
        icon = Image.open(icon_path).convert("RGBA")
        target_size = int(w * 0.28) 
        icon = icon.resize((target_size, target_size), Image.Resampling.LANCZOS)
        
        comp = base_bee.copy()
        x = int(w * 0.15)
        y = int(h * 0.55)
        comp.paste(icon, (x, y), icon)
        
        comp.save("public/" + filename)
        print(f"Created public/{filename}")
        os.remove(icon_path)
    except Exception as e:
        print(f"Error for {filename}: {e}")
