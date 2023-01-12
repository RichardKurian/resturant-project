import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule,FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public signupForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.signupForm=this.formBuilder.group({
      mail: [''],
      psd: [''],
      addr: [''],
      // loggedIn: false;
    })

  }

  // getUserFormData(data:any){
  //   console.warn(data)
  // }

  signUp(){
    this.http.post<any>("/assets/Yumito-users.json",this.signupForm.value)
    .subscribe(res=>{
      alert("registration complete");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("something went wrong");
    })
  }

}
