import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-pro-form',
  templateUrl: './pro-form.component.html',
  styleUrls: ['./pro-form.component.sass']
})
export class ProFormComponent implements OnInit {
  productform !: FormGroup
  iseditmode: boolean = false
  proid !: string
  proobj1 !: Iproduct
  constructor(private _productservie: ProductsService,
    private _uuidservice: UuidService,
    private _Routes: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.createproductform()
    this.editandpatchvalue()

  }
  createproductform() {
    this.productform = new FormGroup({
      pName: new FormControl(null, [Validators.required]),
      pStatus: new FormControl(null, [Validators.required])
    })
  }
  onaddproduct() {
    if (this.productform.valid) {
      let newproduct = { ...this.productform.value, pId: this._uuidservice.generateUUID() }
      this._productservie.createproduct(newproduct)
      this.productform.reset()
      this._router.navigate(['products'])
    }

  }

  editandpatchvalue() {
    this._Routes.params
      .subscribe(res => {
        this.proid = res['pro-id']
        console.log(this.proid);
        if (this.proid) {
          this.iseditmode=true
          this.proobj1 = this._productservie.singleproduct(this.proid)
          this.productform.patchValue(this.proobj1)
        }
      })
  }
  onupdate(){
    if(this.productform.valid){
      let updateproduct={...this.productform.value,pId:this.proid}
      this._productservie.updateproduct(updateproduct)
      this.productform.reset()
      this._router.navigate(['products'])
    }
  }

}
