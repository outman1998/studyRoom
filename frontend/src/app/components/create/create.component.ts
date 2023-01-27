import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from 'src/app/services/apiservice.service';

import { ActivatedRoute } from '@angular/router';

import { AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute, public auth: AuthService) { }

  errorMsg:any;
  succesMsg:any;
  getParamId:any;
  myCourses:any;

  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('id');

    if(this.getParamId) 
    {
      this.service.getSingleData(this.getParamId).subscribe((res)=> {
        console.log(res, 'res==>');
        this.userForm.patchValue({
          'overskrift': res.data[0].overskrift,
          'beskrivelse': res.data[0].beskrivelse,
          'fag': res.data[0].fag,
          'img': res.data[0].img,
          'content': res.data[0].content

        })
      });
    }
    
    this.auth.user$.subscribe(user => {user?.email})


    this.auth.user$.subscribe(user => {
      this.userForm.patchValue({
        email: user?.email
      });
      this.service.getSingleData(user?.email).subscribe(email => {
        this.myCourses = email.data;
      });
    });


  }

  userForm = new FormGroup({

    'overskrift': new FormControl('', Validators.required),
    'beskrivelse': new FormControl('', Validators.required),
    'fag': new FormControl('', Validators.required),
    'img': new FormControl('', Validators.required),
    'content': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required)

  });



  // create new course
  userSubmit() {

    if(this.userForm.valid) 
    {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=> {
        console.log(res, 'res==>');
        this.userForm.controls['overskrift'].reset();
        this.userForm.controls['beskrivelse'].reset();
        this.userForm.controls['fag'].reset();
        this.userForm.controls['img'].reset();
        this.userForm.controls['content'].reset();


        this.succesMsg = res.message;
      });
    } else 
    {
      this.errorMsg = "all fields are required!"
    }
    
    this.auth.user$.subscribe(user => {
      this.service.getSingleData(user?.email).subscribe(email => {
        this.myCourses = email.data;
      });
    });

  }

  //update data from current user
  userUpdate() {
    console.log(this.userForm.value, 'updated');

    if(this.userForm.valid) {
      this.service.updateData(this.userForm.value, this.getParamId).subscribe((res)=> {
        console.log(res, 'res Updated');
        this.succesMsg = res.message;
        this.userForm.reset();

      });
    } else {
      this.errorMsg = 'all field is required! User not added';
    }


  }




}