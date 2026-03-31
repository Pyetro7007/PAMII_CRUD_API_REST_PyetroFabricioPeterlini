# People CRUD App

Esse repositório compartilha um aplicativo mobile simples, desenvolvido em JavaScript (utilizando React Native com Expo). Ele permite que o usuário liste, adicione, edite e remova pessoas por meio de um CRUD completo, consumindo uma API REST fake criada com JSON Server. O foco é no consumo de API (Axios), gerenciamento de estado de loading, busca de registros e navegação (React Navigation).

As tecnologias usadas foram:
- Java Script
- React Native
- Expo
- Axios
- JSON Server

---

Para clonar o repositório será necessário o seguinte comando:

````
https://github.com/Pyetro7007/PAMII_CRUD_API_REST_PyetroFabricioPeterlini.git
````

Para acessar a pasta do projeto:

````
cd PAMII_CRUD_API_REST_PyetroFabricioPeterlini/meuCrudApp
````

Após acessar, você deve instalar o node_modules e o package-lock.json usando o comando:

````
npm install
````

Antes de executar o aplicativo, inicie o JSON Server na pasta backend:

````
npx json-server --watch db.json --port 3000
````

Em seguida, crie um túnel HTTP público com o Pinggy:

````
ssh -p 443 -R0:localhost:3000 qr@a.pinggy.io
````

Copie a URL https gerada pelo Pinggy e cole no arquivo src/api/api.js no campo baseURL.
Para executar o aplicativo, será necessário esse comando:

````
npx expo start --tunnel
````

Após executar esse comando, aparecerá um QRcode, que deve ser lido no aplicativo Expo Go.

Obs: É necessário ter instalado o Node.js no computador.

Para mais informações acesse o vídeo: 
