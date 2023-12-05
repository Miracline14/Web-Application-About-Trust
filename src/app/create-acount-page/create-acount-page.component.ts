import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../master.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-acount-page',
  templateUrl: './create-acount-page.component.html',
  styleUrls: ['./create-acount-page.component.scss']
})
export class CreateAcountPageComponent implements OnInit {

  constructor(private service:MasterService, private router:Router, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  mobileNumber:any

  formData = new FormGroup({
    userName: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    phoneNumber: new FormControl('',Validators.required)
  })
  submit(){
     this.service.createUser(this.formData.value)
     this.formData.reset()
      this.router.navigate(['/content'])
     
  }
  openSnackBar(){
    this.snackbar.open('Sucessfully Created Account','Thank You',{
      verticalPosition: 'top',
      horizontalPosition:'right',
      duration:2000
     })
  }
  onInput(event: any): void {
    const inputValue: string = event.target.value;
    // const numericValue: string = inputValue.replace(/\D/g, '');
    this.mobileNumber = inputValue.replace(/\D/g, '').substring(0, 10);
  }
}
