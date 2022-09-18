import { Pipe, PipeTransform } from "@angular/core";
import { Server } from "./pipe.service";

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform{
    transform(serverList: Server[], prop: string) {
        return serverList.sort((a, b) => {
            if(a[prop] > b[prop]){
                return 1
            }else{
                return -1
            }
        })
    }

} 