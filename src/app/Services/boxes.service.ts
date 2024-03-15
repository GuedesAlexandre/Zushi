import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    const apiUrl = 'http://localhost:8001/api/boxs'; // Remplacez par l'URL de votre API

    return this.http.get(apiUrl);
    
  }
}
