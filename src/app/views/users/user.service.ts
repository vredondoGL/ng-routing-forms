import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  private url = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public isUsernameTaken(user: Partial<User>): Observable<boolean> {
    return this.http.get<User[]>(`${this.url}?username=${user.username}`).pipe(
      map((response: User[]) => response.filter(u => u.id !== user.id)),
      map(response => !response.length),
      map(response => {
        return response ? false : true;
      })
    );
  }
}
