import os
from PIL import Image

dir_path = r'd:\Mangystau Future Geopark\MEDIA\caspie'
files = sorted([f for f in os.listdir(dir_path) if f.endswith('.jpg')])

images = [Image.open(os.path.join(dir_path, f)) for f in files]
widths, heights = zip(*(i.size for i in images))

total_width = sum(widths)
max_height = max(heights)

new_im = Image.new('RGB', (total_width, max_height))

x_offset = 0
for im in images:
  new_im.paste(im, (x_offset, 0))
  x_offset += im.size[0]

# Save to public directory
out_path = r'd:\Mangystau Future Geopark\public\tours\caspian_custom_pano.jpg'
new_im.save(out_path)
print('Saved to', out_path)
