import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandePostService {
  constructor(private http: HttpClient) { }

  postData(): Observable<any> {
    const apiUrl = 'http://localhost:8000/api/commandes'; // Remplacez par l'URL de votre API

    return this.http.post(apiUrl, {});

  }
}


