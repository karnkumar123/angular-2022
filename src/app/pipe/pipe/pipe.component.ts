import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PipeService, Server } from '../pipe.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit{
  filterBy: [string, string] = ['by status', 'by name'];
  serverList: Server[];
  filteredString: string = '';
  selectedRadio: string = '';
  isStatusFilterVisible = 'block';
  isNameFilterVisible = 'none';
  selectedFilter: string = this.filterBy[0];
  appStatus = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('stable')
    }, 2000)
  })
  constructor(private _pipeService: PipeService) { }


  ngOnInit(): void {
    this.serverList = this._pipeService.getServer();
  }
  onChange(event: Event){
    this.selectedRadio = (event.target as HTMLInputElement).value;
  }

  onChangeFilter(event: Event){
    if((event.target as HTMLInputElement).value === this.filterBy[0]){
      this.selectedFilter = this.filterBy[0];
      this.isStatusFilterVisible = 'block';
      this.isNameFilterVisible = 'none';
    }else{
      this.selectedFilter = this.filterBy[1];
      this.isStatusFilterVisible = 'none';
      this.isNameFilterVisible = 'block';
    }
  }
  get selectedValue(){
    let value: string;
    if(this.selectedFilter === this.filterBy[0]){
      value = this.selectedRadio;
    }else if(this.selectedFilter === this.filterBy[1]){
      value = this.filteredString;
    }
    return value;
  }

  onAddServer(){
    this.serverList.push({
      'name': 'UAT',
      'startDate': new Date(),
      'status': 'offline',
      'instance': 'large'
    })
  }
}
