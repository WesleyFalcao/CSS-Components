import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-grid',
  templateUrl: './flex-grid.component.html',
  styleUrls: ['./flex-grid.component.scss']
})
export class FlexGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  popUpObj

  teste(){
    this.popUpObj = window.open("PopUp.htm",

    "ModalPopUp",

    "toolbar=no," +

    "scrollbars=no," +

    "location=no," +

    "statusbar=no," +

    "menubar=no," +

    "resizable=0," +

    "width=500," +

    "height=500," +

    "left = 490," +

    "top = 500"
    )

    console.log("popUpObj", this.popUpObj)
  }

  teste2(){
    let newWin = window.open("about:blank", "hello", "width=200,height=200");

    newWin?.document.write("Hello, world!");
  }
}
