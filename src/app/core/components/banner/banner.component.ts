import {
  Component,
  inject,
  Input,
  input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent implements OnChanges {
  @Input() bannerTitle = '';
  @Input() bannerDetails = '';
  @Input() key = 'ZAULZiKbJoU';
  private domSanitizer = inject(DomSanitizer);
  videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/u9Mv98Gr5pY?autoplay=1&mute=1&loop=1&controls=0'
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']) {
    }
  }
}
