import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt'

@Component({
  selector: 'app-card-hover',
  templateUrl: './card-hover.component.html',
  styleUrls: ['./card-hover.component.scss']
})
export class CardHoverComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('card') as any);
  }

}
