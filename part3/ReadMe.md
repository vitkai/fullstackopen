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


# Currently stopped on
https://fullstackopen.com/en/part4/testing_the_backend
async/await