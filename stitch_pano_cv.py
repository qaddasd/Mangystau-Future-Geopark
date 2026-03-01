import cv2
import os

dir_path = r'd:\Mangystau Future Geopark\MEDIA\caspie'
files = sorted([f for f in os.listdir(dir_path) if f.endswith('.jpg')])

images = []
for f in files:
    img = cv2.imread(os.path.join(dir_path, f))
    if img is not None:
        images.append(img)
        print(f"Loaded {f}")

print(f"Total images loaded: {len(images)}")

stitcher = cv2.Stitcher.create(cv2.Stitcher_PANORAMA)
status, pano = stitcher.stitch(images)

if status == cv2.Stitcher_OK:
    out_path = r'd:\Mangystau Future Geopark\public\tours\caspian_custom_pano.jpg'
    cv2.imwrite(out_path, pano)
    print("Panorama stitched successfully and saved to:", out_path)
else:
    print(f"Error during stitching. Status code: {status}")
    print("Trying SCANS mode...")
    stitcher_scans = cv2.Stitcher.create(cv2.Stitcher_SCANS)
    status2, pano2 = stitcher_scans.stitch(images)
    if status2 == cv2.Stitcher_OK:
        out_path = r'd:\Mangystau Future Geopark\public\tours\caspian_custom_pano.jpg'
        cv2.imwrite(out_path, pano2)
        print("Panorama stitched successfully in SCANS mode and saved to:", out_path)
    else:
        print(f"Error during stitching in SCANS mode. Status code: {status2}")
