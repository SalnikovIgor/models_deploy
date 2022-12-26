import os

from pathlib import Path

from app import app
from flask import request, jsonify, send_from_directory

from app.constants import IMAGE_PATH, CLASSES_PATH
from app.classification import Model
from app.nlp import Nlp

model_nlp = Nlp(name='bert_model.pt')


@app.route('/',)
def main_page():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/classification', methods=['POST'])
def classification_image():
    file = request.files['image']
    _, extension = os.path.splitext(file.filename)
    image = Path(f'{IMAGE_PATH}{extension}')
    file.save(image)
    model = Model(model_name='resnet_image_net_10_no_pre_train.pt', image=image, classes_path=CLASSES_PATH)
    classes = model.inference()
    return jsonify(classes), 200


@app.route('/toxic', methods=['POST'])
def toxic_message():
    data = request.get_json()
    pred = model_nlp.inference(data['text'])
    return {'label': pred}, 200


if __name__ == '__main__':
    app.run()
