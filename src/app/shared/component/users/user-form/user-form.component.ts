import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {
userform!:FormGroup
iseditmode:boolean=false
userid !:string
userobj!:Iuser
  constructor(
     private _uuid:UuidService,
     private userservice:UsersService,
     private _router:Router,
     private _routes:ActivatedRoute
     
  ) { }

  ngOnInit(): void {
    this.creteuserform()
    this.iseditandpatch()

  }

  creteuserform(){
    this.userform=new FormGroup({
      userName:new FormControl(null,[Validators.required]),
      userRole:new FormControl(null,[Validators.required])
    })
  }



  onadduser(){
    if(this.userform.valid){
      let user={...this.userform.value,userId:this._uuid.generateUUID()}
      this.userservice.cretenewuser(user)
      this.userform.reset()
      this._router.navigate(['users'])
    }

  }

  iseditandpatch(){
    this._routes.params
    .subscribe(res=>{
      this.userid=res['userid']
      console.log(this.userid);
     if(this.userid){
      this.iseditmode=true
      this.userobj=this.userservice.singleuser(this.userid)
      console.log(this.userobj);
      this.userform.patchValue(this.userobj)  
     }
     
    })
  }


  onupdate(){
    if(this.userform.valid){
      let updateuser={...this.userform.value,userId:this.userid}
      this.userservice.updateuser(updateuser)
      this.userform.reset()
      this._router.navigate(['users'])

    }

  }

}
