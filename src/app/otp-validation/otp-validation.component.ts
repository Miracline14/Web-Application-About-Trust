import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-otp-validation',
  templateUrl: './otp-validation.component.html',
  styleUrls: ['./otp-validation.component.scss']
})
export class OtpValidationComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(){
    this.snackBar.open('Your Amount is Debited sucessfylly','Thank You',{
      verticalPosition: 'top',
      horizontalPosition:'right',
      duration:4000
    });
   
  }
}
