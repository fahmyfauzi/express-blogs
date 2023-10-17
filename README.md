# EXPRESS-BLOGS
Belajar backend api membuat rest api blog/post
## features
- CRUD Post
- Authentication
- Authorization


## requirements
- nodejs
- expressjs
- mongodb
- Postman

## installation

1. Clone repositori
    ```sh
    git clone https://github.com/fahmyfauzi/express-blogs.git
    ```
2. masuk ke dalam directori
    ```sh
    cd express-blogs
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. copy .env.example
    ```
    cp .env.example .env
    ```
5. setup .env
    ```
    PORT = 3000
    CONNECTION_STRING = mongodb://127.0.0.1:27017/blogs
    ACCESS_TOKEN_SECRET = LoginSecretBebas
    ```
6. Start the server:
    ```
    npm run dev
    ```




## usage
- auth register ```http://localhost:3000/api/user/register```
- auth login  ```http://localhost:3000/api/user/login```
- POST ```http://localhost:3000/api/posts/```
- GET  ```http://localhost:3000/api/posts/```
- GET by Id ```http://localhost:3000/api/posts/652ea17f61fd23031ed735cf```
- PUT by Id ```http://localhost:3000/api/posts/652ea17f61fd23031ed735cf```
- DELETE by Id ```http://localhost:3000/api/posts/652ea17f61fd23031ed735cf```
- GET All access public ```http://localhost:3000/api/posts/all```


## credits

[Fahmy Fauzi ](https://www.instagram.com/fahmyfauzii/)

## screanshot
coomingsoon
