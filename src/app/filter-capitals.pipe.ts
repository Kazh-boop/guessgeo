import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country';

@Pipe({
  name: 'filterCapitals'
})
export class FilterCapitalsPipe implements PipeTransform {

	transform(value: any[], property: string, searchString: string): any {
		if (typeof value !== 'undefined' && value.length > 0 && searchString !== '') {
		    return value.filter((e) => {
			    return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
		    });
		} else {
		    return [];
		}
	}

}
