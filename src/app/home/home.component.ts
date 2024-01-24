import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Login';
import { AdminService } from '../admin.service';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private httpService:HttpserviceService,private router:Router,private adminService:AdminService){}

  model=new Login("","");
  post:any;

  userLogin(){
    this.httpService.userLogin(this.model).subscribe(
      (response:string)=>{this.post=response;
        console.log("hii");
        
      if(this.post=="welcome user")
      this.router.navigate(['/food-product']);
    else
    alert(this.post);
      }
    );
  }

  userSignUp(){
    this.httpService.userSignUp(this.model).subscribe(
      (response:string)=>{this.post=response;
      if(this.post=="Successfully LogedIn")
        alert(this.post);
        
        else
      this.router.navigate(['/home']);
      }
    );
  }

  adminLogin(){
    this.adminService.adminLogin(this.model).subscribe(
      (response:string)=>{this.post=response;
        
      if(this.post=="welcome user")
      this.router.navigate(['/admin']);
    else
    alert(this.post);
      }
    );
  }

  adminSignUp(){
    this.adminService.adminSignUp(this.model).subscribe(
      (response:string)=>{this.post=response;
      if(this.post=="successfully signup")
        alert(this.post);
        
        else
      this.router.navigate(['/home']);
      }
    );
  }
}
