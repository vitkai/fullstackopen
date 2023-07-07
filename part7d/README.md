https://fullstackopen.com/en/part7/webpack

# Course steps
## webpack
install with the command:
`npm install --save-dev webpack webpack-cli`

## build
When we execute the 
`npm run build`

command, our application code will be bundled by webpack. The operation will produce a new main.js file that is added under the build directory

## transform our application into a minimal React application
Let's install the required libraries:
`npm install react react-dom`

### babel-loader
The options property is used for specifying parameters for the loader, which configure its functionality.
Let's install the loader and its required packages as a development dependency:
`npm install @babel/core babel-loader @babel/preset-react --save-dev`

### two more missing dependencies 
core-js and regenerator-runtime:
`npm install core-js regenerator-runtime`

### @babel/preset-env 
plugin that contains everything needed to take code using all of the latest features and transpile it to code that is compatible with the ES5 standard

install the preset with the command:
`npm install @babel/preset-env --save-dev`

# Currently stopped on
https://fullstackopen.com/en/part7/webpack
CSS