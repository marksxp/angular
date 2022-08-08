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


ng g c components/pipes-nativas
ng g c components/pipes-personalizadas
ng g c components/directivas
ng generate pipe pipes/transformar
ng generate directive directives/resaltado
ng generate directive directives/iterador

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