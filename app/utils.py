import json
import PIL
from pathlib import Path


class Utils:
    @staticmethod
    def import_json(path: Path):
        with open(Path(path)) as file:
            json_file = file.read()
        return json.loads(json_file)

    @staticmethod
    def import_image(path: Path):
        return PIL.Image.open(path)
