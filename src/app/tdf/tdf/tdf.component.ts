import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  @ViewChild('signUpForm') signUpForm: NgForm;
  defaultSecretQuestion = 'friend';
  answers = '';
  genders: [string, string] = ['male', 'female'];
  isSubmitted = false;
  userObject  = {};
  constructor() { }

  ngOnInit(): void {
  }
  email: "admin@gmail.com"
  gender: "female"
  secQuestion: "friend"
  secretAnswers: ""
  username: "Admin"
  onSignUpFormSubmit(){
    this.isSubmitted = true;
    this.userObject = {
      'email': this.signUpForm.value.email,
      'gender': this.signUpForm.value.gender,
      'secQuestion': this.signUpForm.value.secQuestion,
      'secretAnswers': this.signUpForm.value.secretAnswers,
      'username': this.signUpForm.value.username,
      'pincode': this.signUpForm.value.address.pincode
    }

    this.signUpForm.reset();
  }

  suggestUser(){
    this.signUpForm.setValue({
      username: 'Admin',
      email: 'admin@gmail.com',
      gender: 'female',
      secQuestion: this.defaultSecretQuestion,
      secretAnswers: '',
      address: {
        district: 'North Delhi',
        city: 'New Delhi',
        state: 'UT',
        pincode: 110011
      }
    })
  }
  defaultAddress(){
    this.signUpForm.form.patchValue({
      address: {
        district: 'Bangalore',
        city: 'Bangalore',
        state: 'KR',
        pincode: 721657
      }
    })
  }
}
