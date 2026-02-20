import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    def replacer_yellow(match):
        classes = match.group(0)
        classes = classes.replace('inline-block', 'flex items-center justify-center')
        classes = classes.replace('py-4', 'h-[72px]')
        if 'whitespace-nowrap' not in classes:
            classes = classes[:-1] + ' whitespace-nowrap"'
        return classes
    
    # Just look for inline-block px-8 py-4 bg-warm-honey
    content = re.sub(r'className="[^"]*inline-block[^"]*py-4[^"]*bg-warm-honey[^"]*"', replacer_yellow, content)

    def replacer_phone(match):
        classes = match.group(0)
        classes = classes.replace('inline-block', 'flex flex-col items-center justify-center')
        classes = classes.replace('py-4', 'h-[72px]')
        if 'whitespace-nowrap' not in classes:
            classes = classes[:-1] + ' whitespace-nowrap"'
        return classes
    
    # Just look for inline-block px-8 py-4 bg-transparent border-2 border-white/60
    content = re.sub(r'className="[^"]*inline-block[^"]*py-4[^"]*bg-transparent[^"]*border-white/60[^"]*"', replacer_phone, content)

    with open(filepath, 'w') as f:
        f.write(content)

src_dir = '/Users/josephknittel/The Helpful Hive/website/src'
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
print("Finished standardizing all bottom CTA sections.")
