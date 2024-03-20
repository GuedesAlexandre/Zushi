
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandePostService {
  constructor(private http: HttpClient) { }
  
  postData(data: any): Observable<any> {
    const apiUrl = 'http://localhost:8001/api/commandes'; // Remplacez par l'URL de votre API
  
    return this.http.post(apiUrl, data);
  }
}


