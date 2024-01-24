import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './Item';
import { Login } from './Login';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getItem(){
    const url="http://localhost:8080/api/item/show";
    return this.http.get(url)
  }
// model=new Item(3,"kopta",130);
// model3={itemId: 3, itemName: 'panner', itemPrice: 120};
 update(i:Item){
    var url="http://localhost:8080/api/item/update/"+i.itemId;
    var headers=new HttpHeaders({"Content-Type":"application/json"});
    console.log(i);
    
    return this.http.put(url,i,{headers});
  }
 
  delete(id:number){
    const url="http://localhost:8080/api/item/delete/"+id;
    return this.http.delete(url);
  }

  create(model:Item){
    const url="http://localhost:8080/api/item/create";
    var headers=new HttpHeaders({"Content-Type":"application/json" });
    console.log(model);
    return this.http.post(url,model,{headers});
  }

  adminLogin(model:Login){
    const url="http://localhost:8080/admin/login/"+model.email+"/"+model.password;
    var headers=new HttpHeaders({'Content-Type':'application/json', responseType:'text'});
    return this.http.get(url,{headers,'responseType':'text'});
  }

  adminSignUp(model:Login)
  {
    const url="http://localhost:8080/admin/signup";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType: 'text'});
    console.log(model);
    
    return this.http.post(url,model,{headers,'responseType': 'text'});

  }
}
