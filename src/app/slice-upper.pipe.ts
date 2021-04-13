import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SliceUpper'
})
export class SliceUpperPipe implements PipeTransform {

  transform(text: string): string {
    return text;
  }

}
