import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectFade, Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: 'app-swiper1',
  templateUrl: './swiper1.component.html',
  styleUrls: ['./swiper1.component.scss']
})
export class Swiper1Component implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    centeredSlides: true,
    height: 337,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  };

  resData = {};
  innerBannerList = [
    {
      title: '公告1',
      url: 'string',
      pictureId: '1',
      itemId: '1',
      pictureUrl: 'https://wpimg.vocus.cc/uploads/2017/12/title01-700x366.jpg',
      state: false,
    },
    {
      title: '公告2',
      url: 'string',
      pictureId: '2',
      itemId: '2',
      pictureUrl: 'https://cdn2.ettoday.net/images/6325/6325418.jpg',
      state: false,
    },
  ];
  // 過渡效果使用的變數
  // show: string;


  // pictureUrl: string;
  // title: string = null;
  // url: string;
  // pictureId: string;
  // itemId: string;

  constructor() { }

  ngOnInit(): void {
  }

  
}
