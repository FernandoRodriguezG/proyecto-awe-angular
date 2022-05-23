import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Content } from './content'

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  getContentUrl = 'http://localhost:3000/api/vistas';

  constructor(private http: HttpClient) { }

  getContent(){
    return this.http.get<Content[]>(this.getContentUrl);
  }
}
