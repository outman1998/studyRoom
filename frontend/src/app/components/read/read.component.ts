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
  countCourses = 0;
  deletedSuccesMsg:any;

  searchTerm: any;
  

  ngOnInit(): void {

    this.service.getAllData().subscribe((res) =>{

      console.log(res, "res==>");

      this.readData = res.data;
      this.countCourses = this.readData.length;
    });

  }

  // get delete ID here
  deleteID(id: any){

    console.log(id, 'deletedID==>');

    this.service.deleteData(id).subscribe((res)=> {
      console.log(res, 'deleteresult==>');
      this.deletedSuccesMsg = res.message;
    });

    this.service.getAllData().subscribe((res) =>{

      console.log(res, "res==>");

      this.readData = res.data;
      
    });

  }


  updateID(id:any) {}





}
