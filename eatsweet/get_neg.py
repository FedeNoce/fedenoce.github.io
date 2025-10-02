import os
from PIL import Image, ImageOps

# Cartella di input e output
input_dir = "./assets/background"
output_dir = "./assets/background_neg"

# Crea la cartella di output se non esiste
os.makedirs(output_dir, exist_ok=True)

# Scansiona tutti i file nella cartella
for filename in os.listdir(input_dir):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        filepath = os.path.join(input_dir, filename)

        # Apri immagine
        img = Image.open(filepath)

        # Converte in RGB (evita problemi con immagini con alpha)
        img = img.convert("RGB")

        # Crea il negativo
        neg = ImageOps.invert(img)

        # Salva con _neg nel nome
        name, ext = os.path.splitext(filename)
        output_path = os.path.join(output_dir, f"{name}_neg{ext}")
        neg.save(output_path)

        print(f"✅ Salvato: {output_path}")
