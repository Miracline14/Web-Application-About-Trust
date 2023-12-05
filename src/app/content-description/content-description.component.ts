import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterPageComponent } from '../register-page/register-page.component';

@Component({
  selector: 'app-content-description',
  templateUrl: './content-description.component.html',
  styleUrls: ['./content-description.component.scss']
})
export class ContentDescriptionComponent implements OnInit {

  constructor(private service:MasterService, private route:ActivatedRoute, private dialog:MatDialog) { }
  cards:any
  trustDetails : any
  ngOnInit(): void {

    this.route.paramMap.subscribe((details: any) => {
      this.trustDetails = details.get('id')
      this.service.getTrustDetails(this.trustDetails).subscribe((trustIdeas: any) => {
        this.cards = trustIdeas
      })

    })

  }
register(){
  const dialogRef = this.dialog.open(RegisterPageComponent,{width:'20%'})



}
}
