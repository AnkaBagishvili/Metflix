import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { CarousellComponent } from '../carousell/carousell.component';
import { VideoContent } from '../../interfaces/video-content';
import { forkJoin, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, BannerComponent, CarousellComponent, ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent implements OnInit {
  movieService = inject(MovieService);

  popularMovies: VideoContent[] = [];
  tvShows: VideoContent[] = [];
  ratedMovies: VideoContent[] = [];
  nowPlayingMovies: VideoContent[] = [];
  movies: VideoContent[] = [];
  topRatedMovies: VideoContent[] = [];
  upcomingMovies: VideoContent[] = [];

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    // this.movieService.getNowPlayingMovies(),
    // this.movieService.getUpcomingMovies(),
    // this.movieService.getPopularMovies(),
    // this.movieService.getTopRated(),
  ];
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows]) => {
          this.bannerDetail$ = this.movieService.getBannerDetail(
            movies.results[1].id
          );
          this.bannerVideo$ = this.movieService.getBannerVideo(
            movies.results[1].id
          );
          return {
            movies,
            tvShows,
            // nowPlaying,
            // upcoming,
            // popular,
            // topRated,
          };
        })
      )
      .subscribe((res: any) => {
        this.movies = res.movies.results as VideoContent[];
        this.tvShows = res.tvShows.results as VideoContent[];
        // this.ratedMovies = res.ratedMovies.results as VideoContent[];
        // this.nowPlayingMovies = res.nowPlaying.results as VideoContent[];
        // this.upcomingMovies = res.upcoming.results as VideoContent[];
        // this.popularMovies = res.popular.results as VideoContent[];
        // this.topRatedMovies = res.topRated.results as VideoContent[];
        this.getMovieKey();
      });
  }

  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id).subscribe((res) => {
      console.log(res);
    });
  }
}
