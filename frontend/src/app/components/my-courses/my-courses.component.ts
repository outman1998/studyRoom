import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  
  constructor() {}

  @Input() kursus: Array<any> = [];

  @Input() getkursustal!: number;


  @Input() coursesTal = 0;

  ngOnInit() {}

  deletecourse(id:any) {
    this.kursus.pop();
    this.coursesTal--;
    alert("The chosen course is now deleted from your favorites")

  }





}
