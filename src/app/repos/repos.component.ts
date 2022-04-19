import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../api-request.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  userName!: string;
  repos:any

  constructor(private gitInfoService: GitInfoService) { }

  getUserRepositories(){
    this.gitInfoService.getUserName(this.userName);
    this.gitInfoService.getUserRepos().then((repos:any)=>{
      this.repos = repos;
    })
  }

  ngOnInit(): void {
    this.getUserRepositories();
  }

}
