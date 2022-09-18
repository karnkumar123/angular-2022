import { Pipe, PipeTransform } from "@angular/core";
import { Server } from "./pipe.service";

@Pipe({
    'name': 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform{
    transform(serverList: Server[], selectedfilter: string, selectedValue: string) {
        let returnedData: Server[] = [];
        if(selectedfilter === '' || selectedValue === ''){
            return serverList;
        }
        if(selectedfilter === 'by status'){
            returnedData = serverList.filter(server => server.status === selectedValue);
        }else if(selectedfilter === 'by name'){
            returnedData = serverList.filter((eachServer) => {
                return eachServer.name.toUpperCase().indexOf(selectedValue.toUpperCase()) > -1;
            })
        }
        return returnedData;
    }  
}