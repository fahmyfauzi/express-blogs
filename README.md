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
    CONNECTION_STRING = mongodb:/host:port/blogs
    ACCESS_TOKEN_SECRET = bebas
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

## Api
- register 
    ```
    {
    "username":"yourusername",
    "email":"email@test.com",
    "password":"12345678"
    } 
    ```
- login 
    ```
    {
    "email":"email@test.com",
    "password":"12345678"
    } 
    ```
- add post / update
    ```
    {
    "title":"express  Pemula",
    "content":"ini adalah contoh content dari express pemula",
    "tags":[
        "code","programmer","fullstack","javascript"
    ],
    "thumbnail":"jspicture.jpg"
    }
    ```
    
- output get by id
    ```
    {
        "status": true,
        "message": "success",
        "data": {
            "_id": "652eb805b3fa814c61902feb",
            "title": "express  Pemula",
            "content": "ini adalah contoh content dari express pemula",
            "author": "alvianda",
            "tags": [
                "code",
                "programmer",
                "fullstack",
                "javascript"
            ],
            "thumbnail": "jspicture.jpg",
            "createdAt": "2023-10-17T16:36:21.585Z",
            "updatedAt": "2023-10-17T16:36:21.585Z",
            "__v": 0
        }
    }
    ```

## credits

[Fahmy Fauzi ](https://www.instagram.com/fahmyfauzii/)

## screanshot
coomingsoon
