import { Component, OnInit } from '@angular/core';
import { Swiper1Component } from './swiper1/swiper1.component'

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

    swiperMenu=[
        {
            swiperId:1,
            title:'swiper1',
            component: Swiper1Component
        },
        {
            swiperId:2,
            title:'swiper2',
            component:''
        },
        {
            swiperId:3,
            title:'swiper3',
            component:''
        }
    ]

    currentSwiperId:number=1

  constructor() { }

  ngOnInit(): void {
  }

  activeChecker(id:number){
    this.currentSwiperId = id
  }

}
