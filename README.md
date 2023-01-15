The repository contains an application for running CV and NLP models on a VPS server or local machine. 
The client side is written on Angular, the server side using  Flask.

## Pre-install
The machine must have:
``` 
curl
python3
pip
python3-venv
```
## Install
## 1. Create and activate virtual environment
`python3 -m venv venv`  
`source venv/bin/activate`
## 2. Install python dependencies
`pip install -r requirements.txt --no-cache-dir`
## 3. Install client dependencies
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`  
`source ~/.bashrc`  
`nvm install 16.15.0`  
`cd client`  
`npm i`
## 4. Build client
In file `src/environments/environment.prod.ts` change variable `baseUrl` to the URL 
that will be used for app launcher and build static:
`npx ng build --output-path ../app/static/`
## 5. Run application
`cd ~/models_deploy`
`gunicorn -b 0.0.0.0:5000 main:app`

Demo: http://194.87.110.41:5000/
