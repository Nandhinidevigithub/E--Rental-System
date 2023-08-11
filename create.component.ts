import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vendor } from '../ivendor';
      
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //vendorObj!:Vendor;
  form!: FormGroup;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public vendService: VendorService,
    private router: Router
  ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      categoryId: new FormControl('', [Validators.required]),
      vendorName: new FormControl('', [Validators.required]),
      vendorUsername: new FormControl('', [Validators.required]),
      vpwd: new FormControl('', [Validators.required]),
      vendorPhone: new FormControl('', [Validators.required]),
      vendorEmail: new FormControl('', [Validators.required]),
      vendorAddress: new FormControl('', [Validators.required]),
      vendorCity: new FormControl('', [Validators.required]),
      vendorState: new FormControl('', [Validators.required]),
      vendorPincode: new FormControl('', [Validators.required]),
      vendorAccountBalance: new FormControl('', [Validators.required])
    });
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.vendService.create(this.form.value).subscribe((res:any) => {
         console.log('Vendor Added successfully!');
         this.router.navigateByUrl('vendor/index');
    })
  }
   
}
