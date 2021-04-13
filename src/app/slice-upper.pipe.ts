import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SliceUpper'
})
export class SliceUpperPipe implements PipeTransform {

  transform(val: string): string {
    return val.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toUpperCase();
  }

}
