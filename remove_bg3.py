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
    ("/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_poop_scoop_1771614707006.png", "public/bee_outdoor_scoop.png"),
    ("/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_poop_bag_1771614728139.png", "public/bee_outdoor_bag.png"),
    ("/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_two_poop_bags_1771614754915.png", "public/bee_outdoor_two_bags.png"),
    ("/Users/josephknittel/.gemini/antigravity/brain/0eaa5c12-51f4-4469-99ea-c42e6feba2a1/bee_watering_can_1771614769923.png", "public/bee_outdoor_watering.png")
]

for src, dest in files:
    try:
        if os.path.exists(src):
            print(f"Processing and saving to {dest}...")
            remove_white_bg(src, dest)
    except Exception as e:
        print(f"Error on {src}: {e}")
        
print("Done!")
