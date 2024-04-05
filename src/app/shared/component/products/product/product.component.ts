import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
proid !:string
proobj1 !:Iproduct
  constructor(private _routes:ActivatedRoute,private _productsservices:ProductsService) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe(res=>{
      this.proid=res['pro-id']
      if(this.proid){
     this.proobj1=this._productsservices.singleproduct(this.proid)
      }
    })

  }

}
