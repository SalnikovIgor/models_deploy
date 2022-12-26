import torch
import torch.nn.functional as nnf
from pathlib import Path
from torch.autograd import Variable
from torchvision import transforms

from app.utils import Utils
from app.constants import MODELS_FOLDER, CLASSES_PATH


class Model:
    def __init__(self, model_name: str, image: Path, classes_path: Path):
        self.model_name = MODELS_FOLDER / model_name
        self.image = image
        self.classes_path = classes_path

    def image_preprocess(self):
        normalize = transforms.Normalize(
            mean=[0.485, 0.456, 0.406],
            std=[0.229, 0.224, 0.225]
        )

        preprocess = transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            normalize
        ])

        img = Utils.import_image(self.image)
        img = img.convert('RGB')
        img_tensor = preprocess(img)
        img_tensor = img_tensor.unsqueeze_(0)
        return Variable(img_tensor)

    def inference(self):
        model = torch.load(self.model_name, map_location=torch.device('cpu'))
        model.eval()

        image = self.image_preprocess()
        with torch.inference_mode():
            output = model(image)

        prob = nnf.softmax(output, dim=1)
        predictions, indexes = prob.topk(5, dim=1)

        return Model.get_prediction_table(predictions.tolist(), indexes.tolist())

    @staticmethod
    def get_prediction_table(predictions: list, indexes: list):
        classes = Utils.import_json(CLASSES_PATH)
        classes = [(key, classes[key]) for key in sorted(classes)]
        return [{'class': classes[value][1], 'probability': f'{round(predictions[0][index] * 100, 2)}'}
                for index, value in enumerate(indexes[0])]
