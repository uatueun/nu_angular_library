import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menu=[
    {
      id:1,
      title:'Home',
      link:'/'
    },
    {
      id:2,
      title:'Swiper',
      link:'/swiper'
    },
    {
      id:3,
      title:'Tabs',
      link:'/tabs'
    },
    {
      id:4,
      title:'Calculator',
      link:'/calculator'
    },
  ]

  tabId:number=1
  active:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  activeChecker(id:number){
    this.tabId = id
  }

}
