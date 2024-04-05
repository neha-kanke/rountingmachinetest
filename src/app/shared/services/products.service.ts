import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';
import { productsArray } from '../const/product';
import { UuidService } from './uuid.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productarr :Array<Iproduct>=productsArray
  constructor(private _uuidservice:UuidService) { }

  getallproduct(){
    return this.productarr
  }
  singleproduct(id:string){
    return this.productarr.find(pro=>pro.pId===id)!
  
  }

  createproduct(product:Iproduct){
    this._uuidservice.getopenbar(`products name is ${product.pName} and products status is ${product.pStatus}`,'close')
    return this.productarr.push(product)

  }
  updateproduct(product:Iproduct){

    let getindex=this.productarr.findIndex(prod=>prod.pId===product.pId)
    this.productarr[getindex].pName=product.pName
    this.productarr[getindex].pStatus=product.pStatus
    this._uuidservice.getopenbar(`products name  ${product.pName} and products status are ${product.pStatus} update`,'close')
  }

}
