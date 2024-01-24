import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Login';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }

  getItem(){
    const url="http://localhost:8080/api/item/show";
    return this.http.get(url);
  }

  placeOrder(user:User){
    const url ="http://localhost:8080/api/item/order";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.post(url,user,{headers,'responseType':'text'})
  }

  userLogin(model:Login){
    const url="http://localhost:8080/api/userLogin/login/"+model.email+"/"+model.password;
    var headers=new HttpHeaders({'Content-Type':'application/json', responseType:'text'});
    return this.http.get(url,{headers,'responseType':'text'});
  }

  userSignUp(model:Login)
  {
    const url="http://localhost:8080/api/userLogin/signup";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
    return this.http.post(url,model,{headers,'responseType': 'text'});

  }
}
