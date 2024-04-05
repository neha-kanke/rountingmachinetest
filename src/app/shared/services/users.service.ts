import { Injectable } from '@angular/core';
import { Iuser } from '../model/users';
import { users } from '../const/user';
import { UuidService } from './uuid.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
userarr :Array<Iuser>=users
  constructor(private _uuidservice:UuidService) { }


getalluser(){
  return this.userarr
}

singleuser(id:string){
  return this.userarr.find(user=>user.userId===id)!
}

cretenewuser(user:Iuser){
  this._uuidservice.getopenbar(`user name  ${user.userName} and user role are ${user.userRole} added`,'close')
  return this.userarr.push(user)
}

updateuser(updateuser:Iuser){
  let getindex=this.userarr.findIndex(user=>user.userId===updateuser.userId)
  this.userarr[getindex].userName=updateuser.userName
  this.userarr[getindex].userRole=updateuser.userRole
  this._uuidservice.getopenbar(`user name  ${updateuser.userName} and user role are ${updateuser.userRole} update`,'close')
}

}
