import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public fullname: string;
  public username: string;
  public password:string;
  public fname:string;
  public uname:string;
  public pword:string;
  submit:boolean=true;
  edit:boolean=false


  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    this.fname=this.fullname;
    this.uname=this.username;
    this.pword=this.password
    this.submit=false;
    this.edit=true;
    console.log(this.fname,this.uname,this.pword)

  }
  onEdit(){
    this.submit = true;
    this.edit = false;
  }

}
