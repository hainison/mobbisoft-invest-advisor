import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  transform(value: any[], property: string): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    const groups: { [key: string]: any[] } = {};

    value.forEach(item => {
      const groupValue = item[property];
      groups[groupValue] = groups[groupValue] || [];
      groups[groupValue].push(item);
    });

    return Object.keys(groups).map(key => ({ key, value: groups[key] }));
  }
}
