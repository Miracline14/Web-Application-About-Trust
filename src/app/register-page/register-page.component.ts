import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../master.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm:any
  mobileNumber: string = '';
  constructor(private service:MasterService, private snackbar:MatSnackBar, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name : new FormControl('',Validators.required),
      lastName:new FormControl(''),
      phoneNumber:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern('[1-9]{1}[0-9]{9}')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      address:new FormControl('',Validators.required),
      intrested:new FormControl('',Validators.required)
    })
  }
  onInput(event: any): void {
    const inputValue: string = event.target.value;
    // const numericValue: string = inputValue.replace(/\D/g, '');
    this.mobileNumber = inputValue.replace(/\D/g, '').substring(0, 10);
  }
submit(){
  this.service.registerUser(this.registerForm.value).subscribe(user =>{
    console.log('----',user);
    this.registerForm.reset()
    
  })
  this.dialog.closeAll()
}
openSNackBar(){
 this.snackbar.open('Sucessfully Registered','Thank You',{
  verticalPosition: 'top',
  horizontalPosition:'right',
  duration:2000
 })
}

}
