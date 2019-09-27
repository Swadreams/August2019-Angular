import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, showMore: any[]): any {
    if(showMore) {
      return value.slice(0, 10) + "....";
    }
    return value;
  }

}
