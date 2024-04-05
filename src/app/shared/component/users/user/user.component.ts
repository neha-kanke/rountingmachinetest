import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
userid !:string
userobj !:Iuser
  constructor( private _routes:ActivatedRoute,private _userservices:UsersService) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe(res=>{
      this.userid=res['userid']
      if(this.userid){
      this.userobj=  this._userservices.singleuser(this.userid)
      }
    })
  }

}
