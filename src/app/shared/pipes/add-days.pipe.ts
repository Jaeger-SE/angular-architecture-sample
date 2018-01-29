import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDays'
})
export class AddDaysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!(value instanceof Date) || !(typeof args[0] === 'number')) {
      return value;
    }

    const numberOfDays = <number>args[0];
    const date = new Date((<Date>value).valueOf());

    date.setDate(date.getDate() + numberOfDays);
    return date;
  }

}
