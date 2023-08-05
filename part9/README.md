# TypeScript

## Setup
install both ts-node and the official typescript package globally by running:
`npm install -g ts-node typescript`

### Local setup
If you can't or don't want to install global packages, you can create an npm project which has the required dependencies and run your scripts in it. We will also take this approach.
As we recall from part 3, an npm project is set by running the command 
`npm init`

Then we can install the dependencies by running
`npm install --save-dev ts-node typescript`


# Run
`npm run ts-node`

Note that if you are using ts-node through package.json, command-line arguments that include short or long form options for the npm run script need to be prefixed with --. So if you want to run file.ts with ts-node and options -s and --someoption, the whole command is:
`npm run ts-node file.ts -- -s --someoption`

## TypeScript's official playground
https://www.typescriptlang.org/play/index.html


# Currently stopped on
https://fullstackopen.com/en/part9/first_steps_with_type_script
A note about the coding style