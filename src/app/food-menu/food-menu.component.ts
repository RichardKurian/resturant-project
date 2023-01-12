import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  var1:any=[];
  public productList : any ;


  constructor(private service:MenuService, private cartService:CartService) { }

  ngOnInit(): void {
   
    this.service.getFoodMenu().subscribe((data)=>{
      console.log(data);
      this.var1=data;
      this.productList=data;

      // this.productList.items.forEach((a:any) => {
      //   Object.assign(a,{quantity:1,total:a.price})
      // });

      this.productList.forEach((a:any)=>{
        a.items.forEach((foodItem:any)=>{
     Object.assign(foodItem,{quantity:1,total:foodItem.price})
        })
      })



    })

  }

addtocart(item:any){
  this.cartService.addtoCart(item);
}

}
