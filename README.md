# Mufcpgh

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## So you want to build this app locally? (For Windows Only)

#### Let's start with downloading the dependencies:
1. Get the latest version of Node by downloading it here: https://nodejs.org/en/download. 
<br> Follow the installer carefully and it should automatically add the path to the /bin folder to your path environment variable. It should also install the latest version of <mark>npm</mark>.
2. Get the latest version of the Angular Cli by running: `npm install -g @angular/cli`
<br> Run this on command line in Administrator mode.
3. Restart the cmd line or open a new one and now you can run all angular cli commands.

#### Now let's clone this repository and run it locally!
1. Setup the GitHub ssh token by following this guide: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui.
1. Clone this beautiful repo by running `git clone git@github.com:Sanprime/mufcpgh.github.io.git`.
1. navigate to the folder mufcpgh by running `cd mufcpgh`.
1. Now you can run all commands found in the `package.json` or run `ng serve`.

## How tp deploy this app to github pages

Run `npm run deploy`, this command will build the app into the /docs folder in the root. The reason for this is github pages renders the compiled app from the docs folder from the root.
<br>
<br>
###### This command is located in the package.json internally runs `npm run copy-cname`. This command copies the cname file located in src/app/mufcpgh to the /docs folder. It is responsible to make the app is accessible from the https://mufcpgh.com URI.

Finally, you need to <mark>commit and push</mark> the changes to the /docs folder in the `main` branch to update the site with the latest changes!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
