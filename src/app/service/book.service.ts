import {Book} from "../model/book";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) {}

  public addBook(book: Book): Observable<Book> {
  return this.http.post<Book>(`${this.apiServerUrl}/book?authorId=1`, book)
  }
  public searchBook(book: Book): Observable<Book> {
    return this.http.get<Book>(`${this.apiServerUrl}/book?id=${book.id}`)
  }
  public deleteBook(bookId: number): Observable<Book> {
    return this.http.delete<Book>(`${this.apiServerUrl}/book/delete/${bookId}`)
  }

}


