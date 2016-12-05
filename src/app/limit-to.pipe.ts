import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, arg: number): any {
    if (value) {
      return value.slice(0, arg)
    }
  }
}
