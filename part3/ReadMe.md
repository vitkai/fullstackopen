# Course link
https://fullstackopen.com/en/part3/

## Dependenies 
### Install all up-to-date dependencies
`npm install`

### Update dependencies
`npm update`


## Run server
`node index.js`
or
`npm start`

### nodemon for autorestsrt of the server
#### Install
`npm install --save-dev nodemon`

#### Run server
`node_modules/.bin/nodemon index.js`
or
update package.json 
```
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
```

and
`npm run dev`

## MongoDB
### install driver
`npm install mongoose`

## dotenv
### install
`npm install dotenv`

## ESlint 
### install
`npm install eslint --save-dev`

### initialize a default ESlint configuration
`npx eslint --init`

### Inspecting and validating a file like index.js can be done with the following command:
`npx eslint index.js`

## Testing
### install jest
`npm install --save-dev jest`

### run tests
`npm test`

#### Running tests one by one
`npm test -- tests/note_api.test.js`

The -t option can be used for running tests with a specific name:
`npm test -- -t "a specific note is within the returned notes"`

The following command will run all of the tests that contain notes in their name:
`npm test -- -t 'notes'`

## cross-env package
### install
`npm install --save-dev cross-env`

### Hosting related dependency
NB: If you are deploying this application to Fly.io/Render, keep in mind that if cross-env is saved as a development dependency, it would cause an application error on your web server. To fix this, change cross-env to a production dependency by running this in the command line:
`npm install cross-env`

## supertest
Let's use the supertest package to help us write our tests for testing the API.
### install
`npm install --save-dev supertest`

## express-async-errors library helps to eliminate the catch from the methods
### install the library
`npm install express-async-errors`

Because of the library, we do not need the next(exception) call anymore. The library handles everything under the hood. If an exception occurs in an async route, the execution is automatically passed to the error handling middleware.


## bcrypt
### install the bcrypt package for generating the password hashes:
`npm install bcrypt`

## mongoose-unique-validator
### Let us install the library:
`npm install mongoose-unique-validator`

# Currently stopped on
https://fullstackopen.com/en/part4/user_administration
Creating a new note


# A true full stack developer's oath

Full stack development is extremely hard, that is why I will use all the possible means to make it easier

 - I will have my browser developer console open all the time
 - I will use the network tab of the browser dev tools to ensure that frontend and backend are communicating as I expect
 - I will constantly keep an eye on the state of the server to make sure that the data sent there by the frontend is saved there as I expect
 - I will keep an eye on the database: does the backend save data there in the right format
 - I will progress in small steps
 - I will write lots of console.log statements to make sure I understand how the code and the tests behave and to help pinpoint problems
 - If my code does not work, I will not write more code. Instead, I start deleting the code until it works or just return to a state when everything was still working
 - If a test does not pass, I make sure that the tested functionality for sure works in the application
 - When I ask for help in the course Discord or Telegram channel or elsewhere I formulate my questions properly, see here (https://fullstackopen.com/en/part0/general_info#how-to-get-help-in-discord-telegram) how to ask for help