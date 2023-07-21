# Mufcpgh

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

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
