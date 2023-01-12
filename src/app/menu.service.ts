import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url:any="/assets/food-menu.json";

  users_url:any="/assets/Yumito-users.json"

  constructor(private http:HttpClient) { }

  getFoodMenu(){
    return this.http.get(this.url);
  }

}
