# AngularJs1-Test
------------------

### Usage ###

To run it, click on app/index.html.

Currently the main page is inside of index.html. To use the template views/home.html in local, you need to install a http server:

npm install http-server

http-server /app

### Structure ###

- app
  - index.html
  - scripts
    - app.js
    - services/apiservice.js: contains the calls to the api.
    - settings/settings.js: contains the endpoints of the api.
    - utils.utils.js: contains functions to reuse in the proyect.
  - style/main.css
  - views/home.html
 - tests/test.js
 
 ### Testing ###
    
I used Karma + Jasmine to test the application. You need to install the following packages:

npm install angular --save

npm install angular-route.js --save

npm install -g karma --save-dev

npm install karma-jasmine jasmine-core --save-dev

npm install angular-mocks --save-dev

npm install karma-phantomjs-launcher --save-dev

Run: karma start
