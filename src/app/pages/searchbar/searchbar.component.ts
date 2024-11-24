import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent implements OnInit {
  searchForm: FormGroup;
  movies: any[] = [];
  message: string | null = null;
  imgPath = 'https://image.tmdb.org/t/p/w500';
  constructor(private movieService: MovieService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({ query: [''] });
  }
  ngOnInit() {
    this.showDefaultMovies();
  }
  onSubmit() {
    const query = this.searchForm.get('query')?.value.trim();
    if (query) {
      this.showMovies(query);
    } else {
      this.showDefaultMovies();
    }
  }
  showMovies(query: string) {
    this.movieService.searchMovies(query).subscribe(
      (data) => {
        if (data.results.length === 0) {
          this.message = 'No movies found.';
          this.movies = [];
        } else {
          this.message = null;
          this.movies = data.results;
        }
      },
      (error) => {
        console.error(error);
        this.message = '';
        this.movies = [];
      }
    );
  }
  showDefaultMovies() {
    this.movies = [];
    this.message = null;
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data.results;
      },
      (error) => {
        console.error(error);
        this.message = '';
      }
    );
  }
}
