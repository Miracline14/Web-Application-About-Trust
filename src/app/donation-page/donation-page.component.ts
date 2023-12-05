import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country, State, City }  from 'country-state-city';
import { MasterService } from '../master.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { OtpValidationComponent } from '../otp-validation/otp-validation.component';
import * as express from 'express';

@Component({
  selector: 'app-donation-page',
  templateUrl: './donation-page.component.html',
  styleUrls: ['./donation-page.component.scss']
})
export class DonationPageComponent implements OnInit {
  

  constructor(private service:MasterService, private dialog:MatDialog) { }
  
country:any
  countries:any;
  donationForm:any;
  donatorsUpdate:any;
  
  
  phoneNumber:any
  dataSource:any;
  states:any;
  donators: any;
  displayedColumns:string[]=['firstName','lastName','dateOfBirth','phoneNumber','email','address','pinCode','donationAmount','message']

  

  paymentForm = new FormGroup({
    phoneNumber : new FormControl('',Validators.required),
    cardName : new FormControl('',Validators.required),
    cardNumber : new FormControl('',Validators.required),
    experyMonth : new FormControl('',Validators.required),
    experyYear : new FormControl('',Validators.required),
    cvv :new FormControl('',Validators.required)
    
  })
  countriesInWorld:any
 
  ngOnInit(): void {

    this.donationForm = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('',Validators.required),
      dateOfBirth : new FormControl('',Validators.required),
      phoneNumber : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      address : new FormControl(''),
      country : new FormControl(null,Validators.required),
      state: new FormControl(null),
      district : new FormControl('',Validators.required),
      pinCode : new FormControl('',Validators.required),
      donationAmount : new FormControl('',Validators.required),
      message : new FormControl('',Validators.required),
     
  
    })
 
  
    this.countries = Country.getAllCountries()
    // this.countries.valueChanges.subscribe((countriesInWorld:any)=>{
    //   this.states=State.getStatesOfCountry(countriesInWorld.isoCode)
 
    // })

     
  this.getDonators()
    
  }

  getDonators(){
    this.service.getDonatersDetails().subscribe(result =>{
       this.donators = result
       for(var i = 0; i<this.donators.length; i++){
        var sliced = this.donators.slice(i, i+1);
       }
       this.dataSource = new MatTableDataSource(sliced)
       
    })
   
  }

  submit(){
    this.service.donatersDetails(this.donationForm.value).subscribe(donators =>{
      window.location.reload();
     
    })
   
  }

  generateOtp(){
   let length = 6
    let otp = '';
    const digits = '0123456789';
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    alert(otp)

  this.service.generateOtp().subscribe(
    (response) => {
      console.log('OTP sent successfully', response);
      // Handle success, maybe show a success message to the user
    }
  );
  

    // return otp;
    const dialogRef = this.dialog.open(OtpValidationComponent,{width:'20%'})
  }
  
  update(){
    this.service.updatedonatorsDetail(this.donationForm.value).subscribe((result: any) => {
     
      this.donationForm.reset()
     
    })
  }

  editRow(data:any){

  }
  onInput(event: any): void {
    const inputValue: string = event.target.value;
    // const numericValue: string = inputValue.replace(/\D/g, '');
    this.phoneNumber = inputValue.replace(/\D/g, '').substring(0, 10);
  }
}
