import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BrowseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Metflix';
}
