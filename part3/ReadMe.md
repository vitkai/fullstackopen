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