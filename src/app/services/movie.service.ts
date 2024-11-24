import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  options: Movie = {
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
    },
    headers: {
      accept: 'application/json',
    },
  };
  http = inject(HttpClient);
  private apiKey = '78092c439b4fc8619e638e71accb83f5';
  private apiUrl = 'https://api.themoviedb.org/3';

  getMovies() {
    return this.http.get<any>(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}`,
      this.options
    );
  }
  getTvShows() {
    return this.http.get(
      `${this.apiUrl}/discover/tv?api_key=${this.apiKey}`,
      this.options
    );
  }
  getBannerImage(id: number) {
    return this.http.get(
      `${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`,
      this.options
    );
  }
  getBannerVideo(id: number) {
    return this.http.get(
      `${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`,
      this.options
    );
  }
  getBannerDetail(id: number) {
    return this.http.get(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`,
      this.options
    );
  }

  // getNowPlayingMovies() {
  //   return this.http.get(
  //     'https://api.themoviedb.org/3/movie/now_playing?api_key=78092c439b4fc8619e638e71accb83f5',
  //     options
  //   );
  // }

  // getPopularMovies() {
  //   return this.http.get(
  //     'https://api.themoviedb.org/3/movie/popular?api_key=78092c439b4fc8619e638e71accb83f5',
  //     options
  //   );
  // }

  // getTopRated() {
  //   return this.http.get(
  //     'https://api.themoviedb.org/3/movie/top_rated?api_key=78092c439b4fc8619e638e71accb83f5',
  //     options
  //   );
  // }

  // getUpcomingMovies() {
  //   return this.http.get(
  //     'https://api.themoviedb.org/3/movie/upcoming?api_key=78092c439b4fc8619e638e71accb83f5',
  //     options
  //   );
  // }

  searchMovies(query: string): Observable<any> {
    const searchUrl = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any>(searchUrl, this.options);
  }
}
