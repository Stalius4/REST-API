# REST-API

### First steps

1. Create repository 
2. `npm init -y`
3. Install packges `npm  i express mongoose dotenv`
4. Create folders and files:
    * `mkdir src src/db src/user` 
    * `touch .gitignore .env src/server.js src/db/connection.js` **.env** file is to connect to database and  **server.js** is entry point
    * `touch src/ user/model.js src/user/controllers.js src/user/routes.js` 
     **model.js** structure of database entries.
     **controllers.js** file where all functions run. 
     **routes.js** build endpoints in here.
5. edit .gitignore file 
    ```javascript
    .env
    /node_modules
    ```
6. edit .env file Loging  to [MongoDB](https://account.mongodb.com/account/login?n=%2Fv2%2F628cacbbcbd8e63659a23def%23security%2Fdatabase%2Fusers)
    * Connect => Connect to application => copy code to .env file and change password and before ? name it

### Learning Objectives

1. Explain the basic of `REST API` (e.g the role of `routes` and `controllers`).   
2. Explain the different `HTTP verbs` and use thep appropriately.
3. Create a `REST API` with `Express.js`.
4. Manually test a REST API (e.g using `Postman/Insomnia` ect).
5. Connect and use database technologies with REST API in a Node.js application.
6. Use appropriate error handling insied `controllers` and `middleware` functions.


### Terminology (things to remember)

1. **REST API** - design principles of web server. It is `completely independent` from any `front-end application`. [Simple explanation](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)
2. **API** - It's like a messanger and it takes requests and tells the system what you want to do and then retuns responce back to you. (Waiter in resturant)
3. **Endpoints** [Simple explanation](https://smartbear.com/learn/performance-monitoring/api-endpoints/) 
    Endpoints are made of`Three key components`:
    * [HTTP Methods](https://www.restapitutorial.com/lessons/httpmethods.html) `Methods or verbs (same thing)`
        * **POST**  On a POST method, data should be sent in the http request to be used by the controller in some way(creating a database entry).
        * **GET**   On a GET method  an endpont should be returning static information or reading database.
        * **PUT**/**PATCH**  The PUT and PATCH methodsss handle updaterequests, for instance updating data inf a database.   
        * **DELETE** 
    * `Paths (Routes)`  A path orroute is the `URL` that targets a partiular endpoint  from a HTTP request. http://localhost:5000*/user*  `/user` is path.
    * `Controllers` **function** that triggers when an **endpoint is hit**. Controller takes **2 arguments**, the **request object** and the **response object**
        ```javascript
         // Home page route.
        router.get('/', function (req, res) {
        res.send('Wiki home page');
        })
        ```

* Thunder client is endpoint testing client 




### Check again 

* CLI 
