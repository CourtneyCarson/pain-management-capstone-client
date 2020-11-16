# Pain Management Capstone 
This will be a troubleshooting application for people to seek out a solution for their pain, by directing them to a trigger point corresponding to their area of pain. There will be a guide on how Trigger Points work, and how to fix them via massage therapy. 


## 1. Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://pain-management-capstone-client.courtneycarson.vercel.app/ and Node app here: https://your-app-server.herokuapp.com/


## 2. User Stories 
This app is for two types of users: a visitor and a logged-in user
  as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

#### Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

####  Log In Page
* as a returning registered user
* I want to enter my username and password
* so I can have access to my account, and use this app

####  Sign Up Page
* as a visitor
* I want to register to use this app  
* so I can create an account

####  Home Page
* as a logged in user
* I want to be able to preview the content of the app
* so I can begin to troubleshoot my pain 

####  About Page
* as a logged in user
* I want to learn about what trigger point therapy is
* so I can treat my pain

#### Treatment Page
* as a logged in user
* I want to learn about how to massage trigger points
* so I can treat my pain

#### Past Treatments Page
* as a logged in user
* I want to see past pain areas I've had
* so I can see my progress 








## 3. Functionality (to do now)
The app's functionality includes:
* (Example) Every User has the ability to create an account

## 4. Technology 
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

### 5. Wireframes
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/register-page-wireframe.png)

## 6. Front-end Structure - React Components Map 
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateless) 
        * __Login.js__ (stateful) - user table (user name, full name, password)
        * __SignUp.js__ (stateful) - user table (user name, full name, password)
        * __Home.js__ (stateful) - trigger-point table (user_id, image,   title, content, date-created)
        * __About.js__ (stateless) -
        * __HowTo.js__ (stateless) -
        * __TriggerPoint.js__ (stateful) - trigger-points-user table (user_id, image, title, content, date-created)
        * __PastTreatments.js__ (stateful) - notes table (trigger_point_id, title, content, date-created)
        * __Navbar.js__ (stateful) - user table
        

## 7. Back-end Structure - Business Objects 
*  Users (database table)
    * id (auto-generated)
    * username (email validation)
    * full name (first & last name)
    * password (at least 8 chars, at least one alpha and a special character validation)

*  (Trigger Points) Results (database table)
    * id (auto-generated)
    * image (image)
    * title (note title)
    * content (note text)
    * date-created (auto generated)

*  trigger_points_user (database table)
    * id (auto-generated)
    * user_id (foreign key to match users (id))
    * trigger_points_id (foreign key to match trigger_points (id))

*  Notes (database table)
    * id (auto-generated)
    * trigger_point_id(foreign key to match trigger point table (id))
    * title (note title)
    * content (note text)
    * date-created (auto generated)


    



## 8. API Documentation (to do later)
API Documentation details:
* (Example) get all users



## Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)

## Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality

## How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test