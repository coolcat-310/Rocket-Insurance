# Rocket Insurance

Rocket Insurance is a MERN stack application. 
Rocket Insurance is intended for prospective clients who are interested in their premium options. The application provides a quote based on the user's address.

To use the application, users would have to register for an account. Next, the user will have to input their address, and only then will Rocket Insurance will provide a quote. 



## Live Link

https://fierce-island-46786.herokuapp.com/

### Technologies Used

 * React, Redux, font-awesome libraries were used in the front-end 
 * Node.js to control server.js APIs and routing
 * Express.js as server framework
 * JWT as Authentication
 * MongoDB/Mongoose as Object Modeling and Database Management 
 
 ![Screen Shot 2020-02-12 at 12 08 22 PM](https://user-images.githubusercontent.com/16736074/74373518-7d89c900-4d91-11ea-9fe2-6dc48c0f60a7.png)

### Front-End

I decided to you react-redux for a number of reasons. First being obvious I want to my proficiency in the library and the ability to translate the requirements into an actual product. Second, I wanted to use a library with a state management system. Having a consolated state object has significantly made data management more feasible.  And lastly, I want to deploy a Single Page Application (SPA), keeping in touch with modern trends. 

![1_QERgzuzphdQz4e0fNs1CFQ](https://user-images.githubusercontent.com/16736074/74459985-0ad82680-4e41-11ea-83c8-f2be859772c8.gif)

## Back-End

The requirement asks for only two pages, but I felt more was needed, especially if the user wanted to save their premium options. I decided to incorporate a server and a database as Express and Mongo respectfully.  Like Django uses Object-relational-mapping (ORM) to interact with its database. I used Mongoose, which provides object mapping and query capabilities with MongoDB. Using Mongoose allows me to structure what a user profile entails (i.e., Address, and Quote) and execute CRUD operations. 

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

## Built With

* Heroku

## Authors

* **Juan Navarrete** - navarretejuan09@gmail.com

