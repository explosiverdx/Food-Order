import { Component } from '@angular/core';
import { Item } from '../Item';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent 
{
    constructor(private httpService:AdminService){}

    posts:any;
    model:any;
    
   ngOnInit()

   {
      this.httpService.getItem().subscribe
      (
        (response)=>{this.posts=response},
        (error)=>{console.log(error);}
      );
    }

  post3:any;

    // update(id:number,name:string,price:number)
    update(id:number,itemName:string,itemPrice:number)
    {
      // this.model={itemId: 3, itemName: 'panner', itemPrice: 120};
      this.model=new Item(id,itemName,itemPrice);
      this.httpService.update(this.model).subscribe
      (
        (response)=>{
        this.posts=response;
        }
        
      );
      
      // window.location.reload;
    }

    delete(id:number){
      this.httpService.delete(id).subscribe(
        (response)=>{this.posts=response}
      )
    }
    
    modelItem:any=new Item(1,"New Item",0);
    create()
    {
      this.httpService.create(this.modelItem).subscribe(
      (response)=>{console.log(response);
        console.log("hello");
        
      }
        
      );
      // console.log("Hello");
      
    }
}
