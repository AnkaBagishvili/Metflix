import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BrowseComponent } from '../../../pages/browse/browse.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, BrowseComponent],
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
}
