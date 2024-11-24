import { NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { VideoContent } from '../../interfaces/video-content';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { PosterPipe } from '../../pipes/poster.pipe';

@Component({
  selector: 'app-carousell',
  standalone: true,
  imports: [NgFor, DescriptionPipe, PosterPipe],
  templateUrl: './carousell.component.html',
  styleUrl: './carousell.component.css',
})
export class CarousellComponent implements OnInit, AfterViewInit {
  @Input() videoContents: VideoContent[] = [];
  @Input() title!: string;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  selectedContent: string | null = null;
  movie: any;
  constructor() {}
  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngOnInit() {
    console.log(this.videoContents);
  }

  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        },
      },
    });
  }
}
