import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/apiservice.service';

import { ActivatedRoute } from '@angular/router';

import { AuthService} from '@auth0/auth0-angular';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute, public auth: AuthService) { }

  getParamId:any;
  readData:any;

  ngOnInit(): void {

    this.getParamId = this.router.snapshot.paramMap.get('id');

    if(this.getParamId) 
    {
      this.service.getSingleData(this.getParamId).subscribe((res)=> {
        console.log(res, 'res==>');
        this.readData = res.data;
      });
    }


  }


}
