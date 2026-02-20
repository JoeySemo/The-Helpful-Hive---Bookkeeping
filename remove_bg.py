from PIL import Image
import sys
import glob
import os

def remove_white_bg(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    
    # Tolerant white removal (to handle anti-aliasing slightly if needed, or just near white)
    for item in datas:
        # If it's near white (e.g., > 240 for R, G, B), make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(img_path, "PNG")

files = [
    "/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_dish_reset_1771613770335.png",
    "/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_fresh_fridge_1771613829286.png",
    "/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_clean_path_1771613877020.png",
    "/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_laundry_cycle_1771613899806.png",
    "/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_laundry_basket_1771613923365.png"
]

for f in files:
    try:
        if os.path.exists(f):
            print(f"Processing {f}...")
            remove_white_bg(f)
            # Copy to public directory
            base = os.path.basename(f)
            # Name them properly
            dest_name = ""
            if "dish_reset" in base: dest_name = "bee_alacarte_dish.png"
            elif "fresh_fridge" in base: dest_name = "bee_alacarte_fridge.png"
            elif "clean_path" in base: dest_name = "bee_alacarte_path.png"
            elif "laundry_cycle" in base: dest_name = "bee_alacarte_cycle.png"
            elif "laundry_basket" in base: dest_name = "bee_alacarte_assist.png"
            os.system(f"cp '{f}' '/Users/josephknittel/The Helpful Hive/website/public/{dest_name}'")
    except Exception as e:
        print(f"Error on {f}: {e}")
        
print("Done!")
