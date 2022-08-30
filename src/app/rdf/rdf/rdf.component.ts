import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RdfComponent implements OnInit {
  genders: [string, string] = ['male', 'female'];
  signupForm: FormGroup;
  NANames: [string, string] = ['admin', 'max'];

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.naAllowedNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.naEmail),
      'gender': new FormControl('male'),
      'address': new FormGroup({
        'city': new FormControl(null, Validators.required),
        'pincode': new FormControl(null, [Validators.required, Validators.maxLength(6)])
      }),
      'hobbies': new FormArray([])
    })

    this.signupForm.get('email').statusChanges.subscribe(status => console.log(status));
    this.signupForm.get('email').valueChanges.subscribe(value => console.log(value));

    this.signupForm.patchValue({
      'username': 'karan'
    })
  }
  onSubmit(){
    console.log(this.signupForm);
  }

  addHobby(){
    let control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  naAllowedNames(control: FormControl): {[s: string]: boolean}{
    if(this.NANames.indexOf(control.value) > -1){
      return {
        'na-allowed-names': true
      }
    }else{
      return null;
    }
  }

  naEmail(control: FormControl): Promise<any> | Observable<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'admin@admin.com'){
          resolve({
            'not-allowed-email': true
          })
        }else{
          resolve(null);
        }
      }, 2000)
    })
  }

  resetForm(){
    this.signupForm.reset({
      'gender': 'male'
    });
  }
}
