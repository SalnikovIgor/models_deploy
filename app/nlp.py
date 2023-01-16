import torch
import numpy as np
from app.constants import MODELS_FOLDER
from transformers import BertTokenizer


class Nlp:
    def __init__(self, name: str):
        self.model_name = MODELS_FOLDER / name
        self.device = 'cpu'
        self.tokenizer = BertTokenizer.from_pretrained('cointegrated/rubert-tiny2', do_lower_case=True)

    def inference(self, text):
        model = torch.load(self.model_name, map_location=torch.device(self.device))
        model.eval()

        test_ids = []
        test_attention_mask = []

        token = self.tokenizer.encode_plus(
            text,
            add_special_tokens=True,
            max_length=27,
            pad_to_max_length=True,
            return_attention_mask=True,
            return_tensors='pt'
        )

        test_ids.append(token['input_ids'])
        test_attention_mask.append(token['attention_mask'])
        test_ids = torch.cat(test_ids, dim=0)
        test_attention_mask = torch.cat(test_attention_mask, dim=0)

        with torch.no_grad():
            output = model(test_ids.to(self.device),
                           token_type_ids=None,
                           attention_mask=test_attention_mask.to(self.device))

        return np.argmax(output.logits.cpu().numpy()).flatten().item()
