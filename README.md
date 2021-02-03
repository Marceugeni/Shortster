![Shortster](https://github.com/Marceugeni/Shortster/blob/main/shortster.JPG)


## Shortster documentation
#### This documentation explains what is Shortster (and the difficulties found on the process of it's development). 

Shortster is an online web-app that allows the user to shorten or shrink a long Url to obtain a short Url. This Url can be shared easily with others and one of it's main feaures is to keep tracking of the number of times it was clicked. 

Shortster also allows the user to custize the shortcode received to put a custom name to it. This makes this App very versatile and easy to use, so the user can pass a custom shortsized Url to a pal simply putting a word to the shortsized Url. This allows the user to have control and keep confidential data save (as Url concerns) to the common user. 

#### Functionalities 

* To shorten an Url and obtain a shortCode or a shorter link to acces the same Url. 
* To assign a name to a short Url for even easier sharing. 
* A user can access a shortCode status endpoint in order to see when the shortcode was registered, when it was last accessed, and how many times it was accessed.

As you can see, Shortster is a very cool web-App for shortening Url's with added tracking fuctionalites.

#### Setup Instructions

  * ##### For developers or sysAdmins

  To set up the project you need to clone the repo to your choosen folder and open it up with your "fav" IDE. Once you already have done that you need to download NodeJS (if you   don't already have it here's the link: [NodeJS](https://nodejs.org/en/)

  Once you have NodeJS installed you can open an instace of your Terminal (always try to work inside your IDE integrated Terminal as this contains the project folder open), and    copy/paste:

  `npm run install`

  This allows Node to install the dependencies needed to run the app. As node_modules are big and heavy this prodedure is essential for keeping the repo light and also it's       download/clone to your local machine easy. 

  As you already have your app ready to run, the only thing you have to do is: inside your IDE terminal copy/paste or write

  `npm run devStart`

  This procedure will open a local development server on your machine. To access the App you must have to open your favorite browser and type: 

  `http://localhost:5000/`

  * ##### For regular users (rest of humanity) ;D
  
  As the project is already on 'development process this feature is not "LIVE" as the app needs a server and 
  


#### Development process

First step is to decide which tecnologies I'll use to build this app. As my main language is Javascript my decision goes to NodeJS, MongoDB and ExpressJS stack. Setting up a NodeJS linked to MongoDB is very easy to develop, very easy to deploy and very fast for the end user, as the technologies are very well optimized. 

Then I've used a little JS library called ShortID for generating the short Url's. 

After installing the dependencies for MongoDB and Express, the main issue was the UI. As I'm a React Developer (pure UI frontend library) this challenge forced me to use pure NodeJs and Mongo (pure Backend) so I encountered numerous issues for generating the index.html file.  Finally found EJS a way to write pure HTML inside a "JS-ish" file and inject logic throug "rose syntax" example: `<%= This goes the code %>` .

Then at the time to implement this syntax the logic behind Node crashed and this is the far I can go for now. 

The App is 80% functional (from the developer tools you can see all data is passed and all is ok) until I reached a cumbersome issue that I don't have necessary skills to solve. 

REASON: Node is not able to talk to MongoDB and I'm honestly stuck for the moment.  

##### Conclusions

Backend is not my specialty but as a Fron-end developer this brings me closer to the Fullstack status I've been dreaming for a long time. 

