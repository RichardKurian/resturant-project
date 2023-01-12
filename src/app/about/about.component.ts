import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private service:MenuService) { }

  //  var1:any=[];

 

  ngOnInit(): void {

    // this.service.getFoodMenu().subscribe((data)=>{
    //   console.log(data);
    //   this.var1=data;
    // })

  }

}
