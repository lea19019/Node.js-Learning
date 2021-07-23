# Node.js Learning Overview

Repository and web app created with the purpose to contain my work done for the class CSE341 - Backend Development II.

Learning Node.js has been a very fun and exciting experience, specially because it allowed me to learn concepts that complemented my understanding of the web.
Creating backend servers allowed me to see in detail how the the client, the server and the database interact with each other. Probably the most exciting experience for me was to create REST APIs applications, I was finally able to see and understand how these mysterious, almost magical, pieces of software work. 
My site will contain many of the projects I worked on, but my two big projects had a greater impact on my learning, you'll find more details below. Thou, this site will contain relevant exercises on my wok with Socket.io, fetching APIs with the client side and interacting with the backend to save them in the server, and other exciting exercises.

[Node.js Learning Home](https://cse341-node-lea19019.herokuapp.com/)

## E-Commerce Project

As part of my learning I created an E-Commerce website, it is a fullstack application created with Node.js. I used EJS templates to display my views, Express as a framework to help me with the backend development and MongoDB as my cloud database to contain the data of the project. This project follows the MVC architecture, which you'll find most of the structure inside the folder routes/routesProject. 

Among all the features this app contains the most revelevant are :
* Capability to create users and allow them to add items to be display on the site so everyone can see them.
* Hashing passwords with bcrypt and authentication with csurf tokens.
* Usage of the multer package and pdfkit to handle upload files, and pdf file creations.
* CRUD operations performed on items and other parts of our data directly linked to a cloud database (MongoDB).
* Displaying error messages with the help of the flash package.
* Pagination to display only a certain amount of items per page.


[E-Commerce Project](https://cse341-node-lea19019.herokuapp.com/project/)

## MyList App

As our final project we worked on teams to create a brand new fullstack app. My team and I created a MERN app that will allow a user to create a list of movies, here is the link to our app repository and our site.

[MyList App Repository](https://github.com/isabelaranguren/cse341-node-team)

[MyList App Site](http://my-litst.herokuapp.com/)

# Development Environment

* Visual Studio Code
* Node.js 14.16.1
* MongoDB 3.6.6
* JavaScript
* CSS
* Heroku

## NPM Packages

* Bcryptjs 2.4.3
* Body-parser 1.19.0
* Connect-flash 0.1.1",
* Connect-mongodb-session 2.4.1
* Cors 2.8.5
* Csurf 1.11.0
* Ejs 2.7.4
* Express 4.17.1
* Express-handlebars 3.0.2
* Express-session 1.17.2
* Express-validator 6.11.1
* Mongoose 5.12.9
* Multer 1.4.2
* Node-fetch 2.6.1
* Nodemailer 6.6.1
* Nodemailer-sendgrid-transport 0.2.0
* Nodemon 2.0.7
* Pdfkit 0.12.1
* Socket.io 4.1.2
* Socket.io-client 4.1.2


# Useful Websites

* [Node.js Documentation](https://nodejs.org/en/docs/)
* [MongoDB Documentation](https://docs.mongodb.com/)
* [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [NPM](https://www.npmjs.com/)
* [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
* [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
* [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)

# Future Work

* Enhance UI/UX on my E-Commerce project
* Implement password reset for users
* Add more items to my shop and save them in a separate cloud storage