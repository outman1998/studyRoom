import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-two',
  templateUrl: './content-two.component.html',
  styleUrls: ['./content-two.component.scss'],
})
export class ContentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  option = { 
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay: true,
    // speed: 600

  }

}
