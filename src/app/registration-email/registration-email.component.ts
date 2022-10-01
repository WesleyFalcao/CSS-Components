import { Component, OnInit, Renderer2, ViewChild, ElementRef, ViewChildren, HostListener } from '@angular/core';

@Component({
  selector: 'app-registration-email',
  templateUrl: './registration-email.component.html',
  styleUrls: ['./registration-email.component.scss']
})
export class RegistrationEmailComponent implements OnInit {

  @ViewChildren('data-anime') data_Anime: ElementRef

  target = document.querySelectorAll('[dataanime]')
  animationClass = 'animate'

  constructor() { }

  ngOnInit(): void {
    // this.Rain()
    
    //this.target
  }

  ngAfterViewInit(){
    console.log(this.data_Anime)
    //console.log(this.target)
  }
  
  // Rain(){

  //   const amount = 20

  //   let body = document.querySelector('body')

  //   let i = 0

  //   while( i < amount){

  //     let drop = document.createElement('i')

  //     let size = Math.random() * 5
  //     let posX = Math.floor(Math.random() * window.innerWidth)
  //     let delay = Math.random() * -20
  //     let duration = Math.random() * 5

  //     drop.style.width = 0.2 + size+'px'
  //     drop.style.animationDelay = delay+'s'
  //     drop.style.animationDuration = duration+'s'
  //     drop.style.left = posX + 'px'

  //     body?.appendChild(drop)

  //     i++
  //   }
  // }

  @HostListener('window:scroll', ['$event'])
  Animation_Scroll(){
    const windowTop = window.pageYOffset
    //console.log(this.target)
    this.target.forEach(function(element){
      console.log(this.data_Anime.nativeElement)
    })
  }
}
