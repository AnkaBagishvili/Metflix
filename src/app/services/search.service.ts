import { Injectable } from '@angular/core';
import { MovieService } from './movie.service';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private movieService: MovieService) {}
  search(query: string): Observable<any[]> {
    return of(query).pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term) => this.movieService.searchMovies(term))
    );
  }
}
