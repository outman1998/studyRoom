import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
target: HTMLElement | undefined;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {}


  godown() {
    console.log("hej");
    this.scroller.scrollToAnchor("targetRed");
  }

}
