# Plantapp -Plantyness

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Motivation
This project was made for the class "Webapllicaties 4". It involves an angular 9 frontend and a .NET Core backend with swagger (see backend "PlantAppApi README.md)


## How to use
First start Backend project, see README backendproject "PlantAppApi"
Then run `npm install` to be sure.
Run `npm start` Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Proxy config for port: 5001, see file "procy.conf.json"

## Tests
Tests with cypress>Integration>tests.spec.js
test if add plant-button is disabled from the start,
Test filter for searching plants,
Test GetPlants to backend,
Test errormessage for status 500 for get call to backend.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Credits 
Proper credit to Mevr. Samijn, Dhr. Samijn and Dhr. Van Der Helst