import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  transform(value: {name: string, lastname: string}, ...args: any[]): string {
    
    let result: string = value.name + " " + value.lastname;

    return result;
  }

}
