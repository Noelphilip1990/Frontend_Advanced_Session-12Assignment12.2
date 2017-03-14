import { Pipe } from '@angular/core';
@Pipe({
	name: 'filterType'
})

export class CustomPipe {

	public transform(filter): any[] {
		let list: any[] = [];

		for (let i = 0; i < filter.length; i++) {
			
				var obj = { name: filter[i].name, description: filter[i].description.substring(0,30) };
				list.push(obj);
			
		}
		return list;
	}
	constructor() { }
}