import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  @ViewChild('process') process : ElementRef
  @ViewChild('success') success : ElementRef

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=> {
      this.process.nativeElement.classList.add('active')
    }, 0)

    setTimeout(()=> {
      this.process.nativeElement.classList.remove('active')
      this.success.nativeElement.classList.add('active')
    }, 1600)
  }
}
