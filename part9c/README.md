# Setting up the project
We will create a project for Ilari, who loves flying small planes but has a difficult time managing his flight history. He is a coder himself, so he doesn't necessarily need a user interface, but he'd like to use some custom software with HTTP requests and retain the possibility of later adding a web-based user interface to the application.

## Let's start by creating our first real project: Ilari's flight diaries. 
As usual, run 
`npm init`

and install the typescript package as a dev dependency.
`npm install typescript --save-dev`

## TypeScript's Native Compiler (tsc) 
can help us initialize our project by generating our tsconfig.json file. First, we need to add the tsc command to the list of executable scripts in `package.json` (unless you have installed typescript globally). Even if you installed TypeScript globally, you should always add it as a dev dependency to your project.

The npm script for running tsc is set as follows:
```
{
  // ..
  "scripts": {

    "tsc": "tsc"
  },
  // ..
}
```

## We can now initialize our tsconfig.json settings by running:
`npm run tsc -- --init`

## Now that we have set our configuration, we can continue by installing express and, of course, also @types/express. 
Also, since this is a real project, which is intended to be grown over time, we will use ESlint from the very beginning:

`npm install express`
`npm install --save-dev eslint @types/express @typescript-eslint/eslint-plugin @typescript-eslint/parser`

## We also create a .eslintrc

## let's install ts-node-dev:
`npm install --save-dev ts-node-dev`

# Let there be code

# Run
`npm run dev`

## Run tsc build
`npm run tsc`

## Run checks
`npm run lint`

## Production mode
`npm start`

# Currently stopped on
https://fullstackopen.com/en/part9/typing_an_express_app
Enum