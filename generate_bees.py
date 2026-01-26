import os
from PIL import Image, ImageOps 
# No numpy needed

def generate_variants(output_dir):
    try:
        # Load the one clean asset we have
        src_path = os.path.join(output_dir, "bee-worker.png")
        if not os.path.exists(src_path):
            print(f"Error: {src_path} not found.")
            return

        src_bee = Image.open(src_path)
        
        print("Generating 6 bee variants...")
        
        # Bee 1: Original
        src_bee.save(os.path.join(output_dir, "bee-1.png"))
        
        # Bee 2: Mirrored
        ImageOps.mirror(src_bee).save(os.path.join(output_dir, "bee-2.png"))
        
        # Bee 3: Rotated 15 deg
        # Expand=True to keep corners, but might change canvas size. 
        # Resize back to original height roughly?
        # Let's just rotate.
        rotated = src_bee.rotate(15, expand=True)
        rotated.save(os.path.join(output_dir, "bee-3.png"))
        
        # Bee 4: Mirrored + Rotated -15 deg
        ImageOps.mirror(src_bee).rotate(-15, expand=True).save(os.path.join(output_dir, "bee-4.png"))
        
        # Bee 5: Small (Baby Bee)
        # Resize to 80%
        small = src_bee.resize((int(src_bee.width * 0.8), int(src_bee.height * 0.8)))
        small.save(os.path.join(output_dir, "bee-5.png"))
        
        # Bee 6: Widened/Fat Bee (Resize width 110%)
        fat = src_bee.resize((int(src_bee.width * 1.1), src_bee.height))
        fat.save(os.path.join(output_dir, "bee-6.png"))
        
        print("Success: Created bee-1.png through bee-6.png")
        
    except Exception as e:
        print(f"Error generating variants: {e}")

if __name__ == "__main__":
    generate_variants("/Users/josephknittel/The Helpful Hive/website/public")
