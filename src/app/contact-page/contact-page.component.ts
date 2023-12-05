import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../master.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private service:MasterService, private snackbar: MatSnackBar,public dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data:any) { }
  coustomerform:any
  ngOnInit(): void {
   this.coustomerform = new FormGroup({
      name : new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
      feedback: new FormControl('',Validators.required)
    })
  }
  submit(){
     this.service.userComments(this.coustomerform.value).subscribe(comments =>{
      this.snackbar.open('Thank You For Your Comments !!','Have a nice Day',{
        verticalPosition:'top',
        horizontalPosition:'right',
        duration:2000
       })
       this.coustomerform.reset();
       this.dialog.closeAll()
     });
    
  }

}
