import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
userarr !:Array<Iuser>
  constructor( private _userservice:UsersService) { }

  ngOnInit(): void {
   this.userarr= this._userservice.getalluser()
  }

}
