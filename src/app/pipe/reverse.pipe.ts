import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReverseInstance implements PipeTransform{
    transform(instance: string) {
        return instance.split('').reverse().join("");
    }

}