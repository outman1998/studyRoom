import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from 'src/app/services/apiservice.service';

import { ActivatedRoute } from '@angular/router';
import { count } from 'console';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errorMsg:any;
  succesMsg:any;
  getParamId:any;

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


  }

  userForm = new FormGroup({
    // 'fullname': new FormControl('', Validators.required),
    // 'email': new FormControl('', Validators.required),
    // 'mobil': new FormControl('', Validators.required)

    'overskrift': new FormControl('', Validators.required),
    'beskrivelse': new FormControl('', Validators.required),
    'fag': new FormControl('', Validators.required),
    'img': new FormControl('', Validators.required),
    'content': new FormControl('', Validators.required),

  });



  // create new course
  userSubmit() {

    if(this.userForm.valid) 
    {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=> {
        console.log(res, 'res==>');
        this.userForm.reset();
        this.succesMsg = res.message;
      });
    } else 
    {
      this.errorMsg = "all fields are required!"
      alert(this.errorMsg)
    }

  }

  //update data from current user
  userUpdate() {
    console.log(this.userForm.value, 'updated');

    if(this.userForm.valid) {
      this.service.updateData(this.userForm.value, this.getParamId).subscribe((res)=> {
        console.log(res, 'res Updated');
        this.succesMsg = res.message;
        // this.userForm.reset();

      });
    } else {
      this.errorMsg = 'all field is required! User not added';
    }


  }




}
