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

