import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayTohigh'
})
export class ArrayTohighPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    let a = value.sort()[0];
    a = Number.isInteger(a) ? a:a.toFixed(2); 
    return a;
  }

}
