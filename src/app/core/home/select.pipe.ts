import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args || args === 'all') {
      return value;
    } else if (args === 'books') {
      return value.filter(it => {
        if (it.hasOwnProperty('mediaType')) {
          return it;
        }
      });
    } else if (args === 'characters') {
      return value.filter(it => {
        if (it.hasOwnProperty('gender')) {
          return it;
        }
      });
    } else if (args === 'houses'){
      return value.filter(it => {
        if (it.hasOwnProperty('region')) {
          return it;
        }
      })
    }
  }

}
