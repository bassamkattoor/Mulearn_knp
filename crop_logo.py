from PIL import Image
import numpy as np
import os

input_path = r'C:\Users\Naayif\.gemini\antigravity-ide\brain\a5b1f157-97d6-4003-b4cc-4e2604b93266\.tempmediaStorage\media_a5b1f157-97d6-4003-b4cc-4e2604b93266_1785341203191.png'
out_path = r'c:\Users\Naayif\.gemini\antigravity-ide\scratch\mulearn-cek-website\public\mulearn-logo-transparent.png'

if os.path.exists(input_path):
    img = Image.open(input_path).convert('RGBA')
    arr = np.array(img)

    # Find the white square inside the screenshot
    white = (arr[:,:,0] > 230) & (arr[:,:,1] > 230) & (arr[:,:,2] > 230)
    y, x = np.where(white)

    min_y, max_y = y.min(), y.max()
    min_x, max_x = x.min(), x.max()

    logo_card = arr[min_y:max_y, min_x:max_x].copy()

    # Make background transparent
    c_r, c_g, c_b = logo_card[:,:,0].astype(float), logo_card[:,:,1].astype(float), logo_card[:,:,2].astype(float)
    is_bg = (c_r > 235) & (c_g > 235) & (c_b > 235)
    logo_card[is_bg, 3] = 0

    out = Image.fromarray(logo_card, 'RGBA')
    out.save(out_path, 'PNG')
    print('Cropped and saved transparent logo successfully.')
