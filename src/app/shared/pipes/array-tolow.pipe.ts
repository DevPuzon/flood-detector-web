import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayTolow'
})
export class ArrayTolowPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    let a = value.sort()[value.length-1];
    a = Number.isInteger(a) ? a:a.toFixed(2);

    return a;
  }

}
