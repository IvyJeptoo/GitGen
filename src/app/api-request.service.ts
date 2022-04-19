import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitInfoService {
  [x: string]: any;
  private userName!: string;
  private repoName!: string;
  

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;


  constructor(private http:HttpClient) { }

  // getting user information
  getUserInfo(){
    return this.http.get<any[]>(`${this.apiUrl}${this.userName}??access_token=+${this.apiKey}`).toPromise()

  }
  getUserName(userName: string){
    this.userName = userName
  }

  // getting repo information
  getUserRepos(){
      return this.http.get<any[]>(`${this.apiUrl}${this.userName}/repos??access_token=+${this.apiKey}`).toPromise();
  }
  getRepos(repositories: string){
    return this.repoName = repositories
  }
  
}
