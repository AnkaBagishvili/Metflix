import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

const options: Movie = {
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

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=78092c439b4fc8619e638e71accb83f5',
      options
    );
  }
  getTvShows() {
    return this.http.get(
      'https://api.themoviedb.org/3/discover/tv?api_key=78092c439b4fc8619e638e71accb83f5',
      options
    );
  }

  getBannerImage(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=78092c439b4fc8619e638e71accb83f5`,
      options
    );
  }

  getBannerVideo(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=78092c439b4fc8619e638e71accb83f5`,
      options
    );
  }

  getBannerDetail(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=78092c439b4fc8619e638e71accb83f5`,
      options
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
}
