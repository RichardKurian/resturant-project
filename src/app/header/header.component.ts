import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem:number=0;
  public foodLabel:any;
  constructor(private cartService:CartService,private menuservice:MenuService ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem =res.length;
    })


    this.menuservice.getFoodMenu()
    .subscribe((data)=>{
      this.foodLabel=data;
    })
  }

  scroll(el: HTMLElement) {

      el.scrollIntoView();
    }

    
}
