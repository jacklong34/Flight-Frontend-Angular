import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Flight } from './flights';

@Injectable({
     providedIn: 'root'
})
export class FlightService {
  constructor(private http: HttpClient) { }
  flights: Flight[] = [];
  booksUrl = 'http://localhost:3020/bookList';

  getFlights() {
    return this.flights;
  }

  addFlight(flight2Add: Flight) {
    this.flights.push(flight2Add);
  }

//   getBooks(): Observable<Flight[]> {
//     return this.http.get<Flight[]>('http://localhost:3020/bookList').pipe(
//       tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
//       catchError(err => of({})));
//   }

//   deleteBook(bookId: number): Observable<any> {
//     const url = `${this.booksUrl}/${bookId}`;
//     return this.http.delete(url).pipe(
//         catchError(this.handleError);
//   }

}
