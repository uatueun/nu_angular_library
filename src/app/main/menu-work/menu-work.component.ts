import { Component, OnInit } from '@angular/core';
import { Menu1Component } from './menu1/menu1.component';

@Component({
  selector: 'app-menu-work',
  templateUrl: './menu-work.component.html',
  styleUrls: ['./menu-work.component.scss']
})
export class MenuWorkComponent implements OnInit {
  menuList=[{
    id:1,
    title:'Change Style',
    component:Menu1Component
  },{
    id:2,
    title:'Change Style',
    // component:Menu1Component
  }]
  currentMenuId:number=1

  constructor() { }

  ngOnInit(): void {
  }


  activeChecker(id:number){
    this.currentMenuId = id
  }

}
