import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
productarr!:Array<Iproduct>
  constructor(private _productservices:ProductsService) { }

  ngOnInit(): void {
    this.productarr=this._productservices.getallproduct()
  

}
}