# Part2 Tutorial
https://fullstackopen.com/en/part2/

## json-server
### Install json-server
You can install a JSON server globally on your machine using the command npm install -g json-server. A global installation requires administrative privileges.
`npm install -g json-server`

### Run json-server
`json-server --port 3001 --watch db.json`

However, a global installation is not necessary. From the root directory of your app, we can run the json-server using the command npx
`npx json-server --port 3001 --watch db.json`

## Let's create an application called part1 and navigate to its directory.
`npx create-react-app part1`
`cd part1`

## Install axios
`npm install axios`

## The application runs as follows

`npm start`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Development
### window.localStorage
It's possible to log out a user using the console, and that is enough for now. You can log out with the command:

`window.localStorage.removeItem('loggedNoteappUser')`

or with the command which empties localstorage completely:

`window.localStorage.clear()`

### prop-types
The expected and required props of a component can be defined with the prop-types package. 
Let's install the package:
`npm install prop-types`

### eslint-plugin-jest
We will start testing the frontend and in order to avoid undesired and irrelevant linter errors we will install the eslint-plugin-jest package:
`npm install --save-dev eslint-plugin-jest`

run:
`npm run eslint`

### testing-library
In addition to Jest, we also need another testing library that will help us render components for testing purposes. The current best option for this is react-testing-library which has seen rapid growth in popularity in recent times.

install:
`npm install --save-dev @testing-library/react @testing-library/jest-dom`

#### Running tests
Create-react-app configures tests to be run in watch mode by default, which means that the npm test command will not exit once the tests have finished, and will instead wait for changes to be made to the code. Once new changes to the code are saved, the tests are executed automatically after which Jest goes back to waiting for new changes to be made.

If you want to run tests "normally", you can do so with the command:
`CI=true npm testcopy`

For Windows (PowerShell) users
`$env:CI=$true; npm test`
`$env:CI=$true; npm test -- src/components/Note.test.js`

# Currently stopped on
https://fullstackopen.com/en/part5/testing_react_apps
Clicking buttons in tests


# A true full stack developer's oath

Full stack development is extremely hard, that is why I will use all the possible means to make it easier

 - I will have my browser developer console open all the time
 - I will use the network tab of the browser dev tools to ensure that frontend and backend are communicating as I expect
 - I will constantly keep an eye on the state of the server to make sure that the data sent there by the frontend is saved there as I expect
 - I will keep an eye on the database: does the backend save data there in the right format
 - I progress with small steps
 - when I suspect that there is a bug in the frontend, I make sure that the backend works for sure
 - when I suspect that there is a bug in the backend, I make sure that the frontend works for sure
 - I will write lots of console.log statements to make sure I understand how the code and the tests behave and to help pinpoint problems
 - If my code does not work, I will not write more code. Instead, I start deleting the code until it works or just return to a state when everything still was still working
 - If a test does not pass, I make sure that the tested functionality for sure works in the application