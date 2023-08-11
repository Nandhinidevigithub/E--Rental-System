import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../ivendor';
import { FormGroup, FormControl, Validators} from '@angular/forms';
      
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
       
  vendorId!: number;
  vendor!: Vendor;
  form!: FormGroup;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public vendService: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) 
  { 
   
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.vendorId = this.route.snapshot.params['vendorId'];

    this.vendService.find(this.vendorId).subscribe((data: Vendor)=>{
      this.vendor = data;
    }); 
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
    this.vendService.update(this.vendorId, this.vendor).subscribe((res:any) => {
         console.log('Vendor updated successfully!');
         this.router.navigateByUrl('vendor/index');
    })
  }
    
}
