## Pre-install
The machine must have:
``` 
curl
python3
pip
```

## 1. Install python dependencies
`pip install -r requirements.txt --no-cache-dir`

## 2. Install client dependencies

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

`source ~/.bashrc`

`nvm install 16.15.0`

`cd client`

`npm i`

## 3. Build client
`npx ng build --output-path ../app/static/`

## 4. Run application
`cd ~/models_deploy`

`gunicorn -b 0.0.0.0:5000 main:app`
