# Coderhouse - angular


github (clases): https://github.com/AbnerGarcia96/Comision-32310-Angular



- Install Angular Material
https://material.io/
https://material.io/design
https://material.angular.io/

ng add @angular/material

package? y
custom theme: Indigo/Pink
global typography? y
animation? Include and enable animation


- Material icons
https://materialdesignicons.com/


ng g c components/componenteA --skip-tests --module=app.module

ng g c components/usuarios --skip-tests

ng g c components/pipes-nativas
ng g c components/pipes-personalizadas
ng g c components/directivas
ng generate pipe pipes/transformar
ng generate directive directives/resaltado
ng generate directive directives/iterador

ng generate pipe pipes/transformar -m app
ng generate directive directives/texto -m app

- agregar un feature modulo + archivo de rutas
ng generate module auth --routing

ng generate component auth/components/login --skip-tests


- Install bootstrap
https://www.youtube.com/watch?v=rli1aiL0o48
https://getbootstrap.com/

npm i bootstrap

config: angular.json
	"styles": [
		"node_modules/bootstrap/dist/css/bootstrap.min.css",
		"src/styles.css"
	],
	"scripts": [
		"node_modules/bootstrap/dist/js/bootstrap.min.js"
	]


- data Json
https://jsonplaceholder.typicode.com/


- test
https://angular-training-guide.rangle.io/testing

- BDD
https://cucumber.io/

- test incluidos en angular:
https://jasmine.github.io/		(define las pruebas)
https://karma-runner.github.io/latest/index.html		(crea un servidor para pruebas)
https://ng-mocks.sudo.eu/


- mock
https://mockapi.io

- obs:
https://stackoverflow.com/questions/70219496/angular-material-table-sort-not-working-when-using-http-get