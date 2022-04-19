import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../api-request.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   
  profile!: any
  userName:any = '';
  

  constructor(private gitInfoService: GitInfoService) { }
 searchUser(){

   this.gitInfoService.getUserName(this.userName)
   this.gitInfoService.getUserInfo().then((user: any)=>{
     this.profile = user;
   })
 }


  ngOnInit(): void {
    this.searchUser()
  }

}
