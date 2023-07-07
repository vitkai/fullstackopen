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

### style loader 
to generate and inject a style element that contains all of the styles of the application.

With this configuration, the CSS definitions are included in the main.js file of the application. For this reason, there is no need to separately import the CSS styles in the main index.html file of the application.

If needed, the application's CSS can also be generated into its own separate file by using the mini-css-extract-plugin.

install the loaders:
`npm install style-loader css-loader --save-dev`

### webpack-dev-server
Every time we make a change to the code, we have to bundle it and refresh the browser to test the code.
The webpack-dev-server offers a solution to our problems. 

install it with the command:
`npm install --save-dev webpack-dev-server`


# Currently stopped on
https://fullstackopen.com/en/part7/webpack
Webpack-dev-server