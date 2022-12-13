import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  scrollDown() {
    document.getElementById('containerr')?.scrollIntoView({
      behavior: 'smooth'
    });

  }


  option = { 
    slidesPerView: 3.28,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
    speed: 600
  }

}


