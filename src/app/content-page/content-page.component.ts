import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  constructor(private service:MasterService) { }

  ngOnInit(): void {
    this.cards = this.service.trustDetail()
  }
 cards:any

}
