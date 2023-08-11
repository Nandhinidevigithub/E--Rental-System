import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../ivendor';
     
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
      
 vendorId!: number;
  vendor!: Vendor;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public vendService: VendorService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
     
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
  }
     
}

