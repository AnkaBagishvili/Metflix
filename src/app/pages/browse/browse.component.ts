import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, LoginComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {}