import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { User } from '../User';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-food-product',
  templateUrl: './food-product.component.html',
  styleUrl: './food-product.component.css'
})
export class FoodProductComponent {
  constructor(private httpService:HttpserviceService, private router:Router){}

  posts:any;
  cart1:Cart[]=new Array;

  ngOnInit(){
    this.httpService.getItem().subscribe(
      (response)=>{this.posts=response},
      (error)=>{console.log(error);
      }
    );
  }

  qty:any;
  total:number=0;
  onAddToCart(item_id:number,itemPrice:number){
    this.total=0;
    this.cart1.push(new Cart(item_id,this.qty,itemPrice*this.qty));
    for(let i of this.cart1){
      this.total+=i.total;
    }
    
  }

 user=new User("Sourabh",9899448682,"Gender","@Email",this.cart1);
 m:any;

  placeOrder(){
    this.httpService.placeOrder(this.user).subscribe
    (
      (response:any)=>{this.m=response;
        console.log(response);

        if(this.m.indexOf("succesfully order")!=-1)
       this.router.navigate(['/successful']) ;
      else
      document.write(this.m);
                     },
      error=>{
        console.log(error);
             }
    )
  }

  }



