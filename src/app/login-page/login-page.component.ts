import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private route:Router, private service:MasterService, private snackBar:MatSnackBar) { }
formdata:any
data:any
  ngOnInit(): void {
    this.formdata = new FormGroup({
      userName: new FormControl(this.data?.userName?? '',Validators.required),
      password:new FormControl(this.data?.password?? '',Validators.required)
    })
  }

  
  loginIn(data:any){
    this.service.loginUser(data).subscribe(res=>{
      localStorage.setItem('login','true')
      localStorage.setItem('userName',data.userName)
      this.route.navigate(['/content'])
     
     
  })
}}
