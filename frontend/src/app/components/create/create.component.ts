import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from 'src/app/services/apiservice.service';

import { ActivatedRoute } from '@angular/router';

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

    this.service.getSingleData(this.getParamId).subscribe((res)=> {
      console.log(res, 'res==>');
      this.userForm.patchValue({
        'fullname': res.data[0].fullname,
        'email': res.data[0].email,
        'mobil': res.data[0].mobil
      })
    })
  }

  userForm = new FormGroup({
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobil': new FormControl('', Validators.required)
  });



  // create new user
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
        this.userForm.reset();

      });
    } else {
      this.errorMsg = 'all field is required!';
    }


  }




}
