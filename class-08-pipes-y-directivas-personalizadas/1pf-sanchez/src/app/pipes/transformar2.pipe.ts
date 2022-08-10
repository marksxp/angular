import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar2'
})
export class Transformar2Pipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): string {
    
    if(value) return "Activo";
    else return "Inactivo";
  }

}
