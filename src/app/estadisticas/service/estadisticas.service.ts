import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  private apiUrl = 'http://localhost:8000/api/estadisticas';
  constructor(private http: HttpClient) { }
  
  getEstadisticas(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
