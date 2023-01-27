import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from 'src/app/services/apiservice.service';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {

  constructor(private service: ApiserviceService, public auth: AuthService) { }

  readData:any;
  deletedSuccesMsg:any;

  searchTerm: any;
  
  countCourses = 0;

  myCourses: Array<string> = [];
  sendCoursestal: number = 0;

  myCoursestal: number = 0;


  ngOnInit(): void {

    this.service.getAllData().subscribe((res) =>{
      this.readData = res.data;
      this.countCourses = this.readData.length;
      console.log(this.readData);
    });

  }

  // get delete ID here
  deleteID(id: any){

    this.service.deleteData(id).subscribe((res)=> {
      console.log(res, 'deleteresult==>');
      this.deletedSuccesMsg = res.message;
    });

    this.service.getAllData().subscribe((res) =>{
      this.readData = res.data;
    });

  }


  updateID(id:any) {}


  tilfoejCourse(course:any) {
    this.myCourses.push(course);
    this.sendCoursestal++;
    this.myCoursestal++;

    alert("The chosen course is now added to your favorites")
  }











}
