import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rdf-assignment',
  templateUrl: './rdf-assignment.component.html',
  styleUrls: ['./rdf-assignment.component.css']
})
export class RdfAssignmentComponent implements OnInit {
  project: FormGroup;
  status: [string, string, string] = ['Stable', 'Critical', 'Finished']
  constructor() { }

  ngOnInit(): void {
    this.project = new FormGroup({
        'projectName': new FormControl(null, Validators.required, this.naProjectName),
        'mail': new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl('Critical', Validators.required)
    })
  }
  naProjectName(control: FormControl): Promise<any> | Observable<any>{
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'Test'){
            resolve({'testNameNotAllowed': true})
          }else{
            resolve(null)
          }
        }, 1000)
      })
  }
  onSubmit(){
    console.log(this.project.value);
  }
}
