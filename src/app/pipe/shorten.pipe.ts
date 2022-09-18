import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(serverName: string, startIndex: number, endIndex: number) {
        if(serverName.length > endIndex){
            return serverName.slice(startIndex, endIndex)+'...';
        }else{
            return serverName
        }
    }
}