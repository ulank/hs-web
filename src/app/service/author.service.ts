import {Author} from "../model/author";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



export class AuthorService{
  private apiServerUrl = '';

  constructor(private http: HttpClient) {}

  public addBook(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.apiServerUrl}/author`, author)
  }
}
