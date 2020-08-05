import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  title = " Second Component " ;

  books : Book [] =[];

  observable : Observable<Book []> = null;

  constructor(private service : BookService) {

     //service.getAllBooks().subscribe(this.success,this.failure);
     //service.getAllBooks().subscribe( data => this.books = data, error => alert(error.message));
  }
  success(data : any)
  {
     this.books = data;
  }
  failure(error : any)
  {
     alert( error.message);
  }
  ngOnInit(): void {
    this.reload();
  }
  reload()
  {
     this.observable = this.service.getAllBooks();
  }

}
