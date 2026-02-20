import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Let's see if we can do a targeted regex replacement for the a tags.
    # The pattern is: >Call (314) 526-7240</a>
    # Or >\n *Call (314) 526-7240\n *</a>
    
    # We want to replace Call (314) 526-7240 with:
    # <span className="block">(314) 526-7240</span><span className="block text-sm font-normal mt-0.5">Call or Text</span>
    # Wait, the prompt says "put Call or Text beneath it".
    # And there are variations of CTA buttons: "Call (314) 526-7240" -> "(314) 526-7240\nCall or Text"
    
    new_btn = '>\n                            <span className="block">(314) 526-7240</span>\n                            <span className="block text-sm font-normal mt-0.5 opacity-90">Call or Text</span>\n                        </a>'
    
    content = re.sub(r'>\s*Call \(314\) 526-7240\s*</a>', new_btn, content)
    
    # For Footer.tsx: >\n                            (314) 526-7240\n                        </a>
    if "Footer.tsx" in filepath:
        footer_btn = '>\n                            <span className="block pb-1">(314) 526-7240</span>\n                            <span className="block text-[10px] opacity-80 uppercase tracking-wider">Call or Text</span>\n                        </a>'
        content = re.sub(r'>\s*\(314\) 526-7240\s*</a>', footer_btn, content)
        
    with open(filepath, 'w') as f:
        f.write(content)

src_dir = '/Users/josephknittel/The Helpful Hive/website/src'
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

print("Done")
