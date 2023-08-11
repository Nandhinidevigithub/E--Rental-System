import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../ivendor';
       
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
       
  vendors: Vendor[] = [];
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public vendService: VendorService) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.vendService.getAll().subscribe((data: Vendor[])=>{
      this.vendors = data;
      console.log(this.vendors);
    })  
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.vendService.delete(id).subscribe(res => {
         this.vendors = this.vendors.filter(item => item.vendorId !== id);
         console.log('Vendor deleted successfully!');
    })
  }
     
}