import os
from PIL import Image, ImageOps, ImageDraw

def clean_and_generate(output_dir):
    try:
        src_path = os.path.join(output_dir, "bee-worker.png")
        if not os.path.exists(src_path):
            print("Source not found")
            return

        img = Image.open(src_path).convert("RGBA")
        width, height = img.size
        
        # Iterative Flood Fill from borders
        # We scan the boundary. If we find a non-transparent pixel, flood fill it.
        # This handles the multi-colored checkerboard by filling one square type, then the next.
        
        # Increase threshold to handle noise
        flood_thresh = 50 
        
        # Scan spots: Top row, Bottom row, Left col, Right col
        # To avoid iterating every pixel, we just sample freqently along borders.
        
        # Helper to check if pixel is transparent
        def is_transparent(pos):
            return img.getpixel(pos)[3] == 0

        # Points to check: Every 10th pixel along edges
        starts = []
        for x in range(0, width, 5):
            starts.append((x, 0))
            starts.append((x, height-1))
        for y in range(0, height, 5):
            starts.append((0, y))
            starts.append((width-1, y))
            
        print("Cleaning background...")
        processed_count = 0
        for pos in starts:
            if not is_transparent(pos):
                # Flood fill this color to transparent
                ImageDraw.floodfill(img, pos, (0,0,0,0), thresh=flood_thresh)
                processed_count += 1
        
        print(f"Executed {processed_count} flood fills.")
        
        # Save cleaned master
        img.save(os.path.join(output_dir, "bee-clean.png"))
        
        # Now Generate Variants from the CLEAN image
        print("Generating variants from clean image...")
        src_bee = img
        
        # Bee 1: Original
        src_bee.save(os.path.join(output_dir, "bee-1.png"))
        
        # Bee 2: Mirrored
        ImageOps.mirror(src_bee).save(os.path.join(output_dir, "bee-2.png"))
        
        # Bee 3: Rotated
        rotated = src_bee.rotate(15, expand=True)
        rotated.save(os.path.join(output_dir, "bee-3.png"))
        
        # Bee 4: Mirrored + Rotated
        ImageOps.mirror(src_bee).rotate(-15, expand=True).save(os.path.join(output_dir, "bee-4.png"))
        
        # Bee 5: Small
        small = src_bee.resize((int(src_bee.width * 0.8), int(src_bee.height * 0.8)))
        small.save(os.path.join(output_dir, "bee-5.png"))
        
        # Bee 6: Modified (Fat)
        fat = src_bee.resize((int(src_bee.width * 1.1), src_bee.height))
        fat.save(os.path.join(output_dir, "bee-6.png"))
        
        print("Done.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    clean_and_generate("/Users/josephknittel/The Helpful Hive/website/public")
