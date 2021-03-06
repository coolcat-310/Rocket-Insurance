# Rocket Insurance

Rocket Insurance is a MERN stack application. 
Rocket Insurance is intended for prospective clients who are interested in their premium options. The application provides a quote based on the user's address.

To use the application, users would have to register for an account. Next, the user will have to input their address, and only then will Rocket Insurance will provide a quote. 

<img width="1645" alt="Screen Shot 2020-02-12 at 11 23 52 PM" src="https://user-images.githubusercontent.com/16736074/74410803-c885f980-4dee-11ea-9fb1-1380a868acb4.png">

## Live Link

https://fierce-island-46786.herokuapp.com/

### Technologies Used

 * React, Redux, font-awesome libraries were used in the front-end 
 * Node.js to control server.js APIs and routing
 * Express.js as server framework
 * JWT as Authentication
 * MongoDB/Mongoose as Object Modeling and Database Management 
 

### Front-End

I decided to you react-redux for a number of reasons. First being obvious I want to my proficiency in the library and the ability to translate the requirements into an actual product. Second, I wanted to use a library with a state management system. Having a consolated state object has significantly made data management more feasible.  And lastly, I want to deploy a Single Page Application (SPA), keeping in touch with modern trends. 

![1_QERgzuzphdQz4e0fNs1CFQ](https://user-images.githubusercontent.com/16736074/74459985-0ad82680-4e41-11ea-83c8-f2be859772c8.gif)

## Back-End

The requirement asks for only two pages, but I felt more was needed, especially if the user wanted to save their premium options. I decided to incorporate a server and a database as Express and Mongo respectfully.  Like Django uses Object-relational-mapping (ORM) to interact with its database. I used Mongoose, which provides object mapping and query capabilities with MongoDB. Using Mongoose allows me to structure what a user profile entails (i.e., Address, and Quote) and execute CRUD operations. 

Furthermore, as a security measure, I incorporated a middleware to validate the authentic user in the protected routes. I used BcryptJS and JSON Web Tokens to both stores the user's credentials and maintained sessions in the browser. 

### Installing

The repository is located at https://github.com/coolcat-310/Rocket-Insurance. 
In addition to cloning the repo, make sure to integrate the application with mongoDB.
I recommend using https://www.mongodb.com/ to host your collections.

In the top directory install the node dependencies 

```
npm i
```

Then install client node dependencies 

```
cd client
npm i
```


### Start the application

The following command will run both the client and server. The client would round on port 3000 and the Server on 5000.

```
npm run dev
```

Make sure that your browser enable CORS, there has been instances where the API request get rejected.

Option - Running Chrome without CORS
```
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```  

## Built With

* Heroku

### Demo

The landing page 
<img width="1645" alt="Screen Shot 2020-02-12 at 11 23 52 PM" src="https://user-images.githubusercontent.com/16736074/74494337-9d9cb380-4e89-11ea-82e0-ad496e17bae7.png">

Registering New User
<img width="1664" alt="Screen Shot 2020-02-13 at 5 48 39 PM" src="https://user-images.githubusercontent.com/16736074/74494603-5236d500-4e8a-11ea-93a7-14846f423125.png">

Login Page
<img width="1658" alt="Screen Shot 2020-02-13 at 6 01 02 PM" src="https://user-images.githubusercontent.com/16736074/74494788-d38e6780-4e8a-11ea-9a42-b1a213e82267.png">

Dashboard page
<img width="1668" alt="Screen Shot 2020-02-13 at 5 49 04 PM" src="https://user-images.githubusercontent.com/16736074/74494649-6ed30d00-4e8a-11ea-83b2-1459f93a3369.png">

Profile Page 
<img width="1654" alt="Screen Shot 2020-02-13 at 5 50 48 PM" src="https://user-images.githubusercontent.com/16736074/74494693-8a3e1800-4e8a-11ea-87ec-2cba13db9de7.png">

Quote Page
<img width="1662" alt="Screen Shot 2020-02-13 at 5 51 13 PM" src="https://user-images.githubusercontent.com/16736074/74494745-afcb2180-4e8a-11ea-8a5d-23796ff310cd.png">


## Authors

* **Juan Navarrete** - navarretejuan09@gmail.com

