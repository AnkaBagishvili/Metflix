import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  navList = ['Home', 'TV Shows', 'Movies', 'My list'];

  UserName: string | null = '';

  ngOnInit() {
    const userData = localStorage.getItem('MetflixAcc');
    if (userData) {
      const parsedData = JSON.parse(userData);
      this.UserName = parsedData[0]?.userName || 'Unknown';
    } else {
      this.UserName = 'Unknown';
    }
  }
  onSignOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
  getNavRoute(item: string): string {
    switch (item) {
      case 'Home':
        return '/browse';
      case 'TV Shows':
        return '/tv-shows';
      case 'Movies':
        return '/movies';
      case 'My list':
        return '/my-list';
      default:
        return '/';
    }
  }
}
