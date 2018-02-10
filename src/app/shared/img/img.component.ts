/*
 * @Author: majunfeng
 * @Date: 2017-12-28 17:13:02
 * @Last Modified by: majunfeng
 * @Last Modified time: 2018-02-10 15:57:44
 */
import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'bas-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, AfterViewInit {
  @ViewChild('appImg') appImg: ElementRef;
  @Input() src?: string;
  @Input() type = 'img'; // img, logo, banner 可不传，默认img
  @Input() spkstyle?: any; // ***********************spkstyle需要传入对象****必须传入对象***********************
  imgUrl: any = {
    img: 'assets/learner/default.jpg',
    logo: 'assets/images/default-logo.png',
    banner: 'assets/images/banner-0.jpg',
  };
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    const _this = this;
    this.appImg.nativeElement.onerror = function () {
      this.src = _this.imgUrl[_this.type];
    };
  }

}
