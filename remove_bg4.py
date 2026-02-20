from PIL import Image
import os

def remove_white_bg(img_path, dest_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # Near white
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(dest_path, "PNG")

files = [
    ("/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_pet_care_1771615018413.png", "public/bee_pet_care.png"),
    ("/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_litter_refresh_1771615033739.png", "public/bee_litter_refresh.png"),
]

for src, dest in files:
    try:
        if os.path.exists(src):
            print(f"Processing and saving to {dest}...")
            remove_white_bg(src, dest)
    except Exception as e:
        print(f"Error on {src}: {e}")
        
print("Done!")
