# BitsxLaMarato

Avui en dia la sexualitat és un tema tabú que no s'arriba a parlar suficient, i per això molts joves aprenen d'una forma descuidada i en part errònia a causa de l'ajuda d'internet i de la pornografia. Per això és important que el jovent tingui medis per aprendre de forma clara i lúdica sobre la salut sexual. En aquest cas presentem una aplicació educativa i agradable que pretén fer que aquestes generacions joves puguin accedir a contingut educatiu sobre salut sexual sense vergonya ni por, oferint una plataforma d'educació cultural general amb un ambient i perspectiva joves.

## Installation

Install Node

### Windows

Go to Node.js web, download stable version and install

https://nodejs.org/es

### Linux

```bash
sudo apt install npm
```
```bash
sudo npm install -g n
sudo n stable
```

Clone the project

```bash
  git clone https://github.com/albertvidalgon13/BitsxMarato.git
```

Go to the backend directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Go to the frontend directory

```bash
  cd ..
  cd frontend
```

Install dependencies

```bash
  npm install
```

## Run Locally

Go to the backend directory

```bash
  cd backend
```

Start the server

```bash
  node index.js
```

Go to the frontend directory

```bash
  cd ..
  cd frontend
```

Start the server

```bash
  npm start
```

Go to the IA/chatgpt-retrieval directory and create a constants.py file with the OPENAI_API_KEY

```bash
  cd ..
  cd IA/chatgpt-retrieval
  touch constants.py
  echo APIKEY = "<your-api-key>" >> constants.py
```

Start the Flask server

```bash
  python app.py
```

### With Docker

If you want to use Docker, we have a docker-compose prepared to ease installation. 

```bash
  docker-compose-up
```
