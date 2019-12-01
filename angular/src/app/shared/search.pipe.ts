import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
// https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
export class SearchPipe implements PipeTransform {

  public transform(value, keys: string, term: string) {
    if (!term) {
      return value;
    }
    return (value || []).filter((item) => keys.split(',').some
    (key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }

}
