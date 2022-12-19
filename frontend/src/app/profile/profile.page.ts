import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private service: ApiserviceService, public auth: AuthService) { }
  readData:any;
  myCourses:any;

  ngOnInit() {
    this.service.getAllData().subscribe((res) =>{

      console.log(res, "res==>");

      this.readData = res.data;

    

    });

    this.auth.user$.subscribe(user => {user?.email})


    this.auth.user$.subscribe(user => {
      console.log(user?.email);
      this.createCourse.patchValue({
        email: user?.email
      });
      this.service.getSingleData(user?.email).subscribe(email => {
        console.log(user?.email, 'DET FUNGERER')

        this.myCourses = email.data;


      });
    });



  }
  createCourse = new FormGroup({
    // 'fullname': new FormControl('', Validators.required),
    // 'email': new FormControl('', Validators.required),
    // 'mobil': new FormControl('', Validators.required)

    'overskrift': new FormControl('', Validators.required),
    'fag': new FormControl('', Validators.required),
    'beskrivelse': new FormControl('', Validators.required),
    'email': new FormControl('',Validators.required),

  });

  courseSubmit() {


      console.log(this.createCourse.value);
      this.service.createData(this.createCourse.value).subscribe((res)=> {
        console.log(res, 'res==>');
        this.createCourse.controls['overskrift'].reset();
        this.createCourse.controls['fag'].reset();
        this.createCourse.controls['beskrivelse'].reset();

        this.service.getAllData().subscribe((res) =>{

          console.log(res, "res==>");
    
          this.readData = res.data;
    
        
    
        });

      });
      this.auth.user$.subscribe(user => {
        this.service.getSingleData(user?.email).subscribe(email => {
          console.log(user?.email, 'DET FUNGERER')
  
          this.myCourses = email.data;
  
  
        });
      });
      

  }

  deleteID(id: any){

    console.log(id, 'deletedID==>');

    this.service.deleteData(id).subscribe((res)=> {
      console.log(res, 'deleteresult==>');
    });

    this.service.getAllData().subscribe((res) =>{

      console.log(res, "res==>");

      this.readData = res.data;
      
    });
    this.auth.user$.subscribe(user => {
      this.service.getSingleData(user?.email).subscribe(email => {
        console.log(user?.email, 'DET FUNGERER')

        this.myCourses = email.data;


      });
    });
    

  }
  
  

}
