from pathlib import Path
from app import app

ROOT_PATH = Path(app.instance_path).parent
MODELS_FOLDER = ROOT_PATH / 'models'

IMAGE_NAME = 'upload_image'
IMAGE_FOLDER = 'data'
IMAGE_PATH = ROOT_PATH / IMAGE_FOLDER / IMAGE_NAME

CLASSES_PATH = MODELS_FOLDER / 'Labels.json'
