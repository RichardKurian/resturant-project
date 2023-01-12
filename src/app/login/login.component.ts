import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }


  login(){
    this.http.get<any>("/assets/Yumito-users.json")
    .subscribe(res=>{
      const user = res.find((a:any)=>{

        if(a.mail === this.loginForm.value.email && a.psd===this.loginForm.value.password){
          a.loggedIn === true;
        }
      
        return a.mail === this.loginForm.value.email && a.psd===this.loginForm.value.password;   
      });
      if(user){
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['food-menu'])

      }else{
        alert(" user not found, register first");
      }
    },err=>{
      alert("something went wrong");
    })
  }

}
