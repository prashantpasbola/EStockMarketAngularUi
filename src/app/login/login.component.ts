import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/service/company.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register!: FormGroup;
  isSubmitted: boolean = false;

//  UserName: string = "Prashant";
//  Password: string = "12345";
  // CompanyName:string="";
  loading: boolean = false;
  checkValid: boolean = false;
  constructor(private frmBuilder: FormBuilder, private router: Router,private service:CompanyService) { }
  ngOnInit() {
    this.loading = false;
    this.checkValid = false;
    //  this.UserName="Prashant";
    //   this.Password="12345";
    //   this.CompanyName="dsdas"

    this.register = this.frmBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]

    });
  }

  onLoggedin() {
    this.loading = true;
    this.checkValid = false;
    console.log(this.register);
    if (!this.register.valid) {
      this.checkValid = true;
      return;
    }
var logInData={
  username:this.register.value.username,
  password:this.register.value.password
}
debugger;
    this.service.logIn(logInData).subscribe(data=>{
     
      console.log(data.access_token); 
      if(data){
        sessionStorage.setItem('token', data.access_token);  
        this.router.navigate(['/home']);
      } 
       else
      {
        this.checkValid = true;
        this.loading = false;
      }
        
    })

    // if (this.register.value.username == this.UserName && this.register.value.password == this.Password) {
    //   this.router.navigate(['/home']);
    // }
    // else
    // {
    //   this.checkValid = true;
    //   this.loading = false;
    // }

  }





}
