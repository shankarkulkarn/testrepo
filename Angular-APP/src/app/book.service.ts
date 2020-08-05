import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = "assets/booklist.json";
 // books :  Book [] = [];

  constructor(private http : HttpClient) {

    //http.get<Book []>(this.url).subscribe( data => this.books=data );
  }
  getAllBooks() : Observable<Book []>
  {
    let obj : Observable<Book []> = this.http.get<Book []>(this.url);
    return obj;

     // return this.http.get<Book []>(this.url);
     //return this.books;
  }


}
