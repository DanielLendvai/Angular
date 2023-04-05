import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_key = '316D2CF32BA849AAA83CB03950843C9B';

@Injectable({
  providedIn: 'root',
})

export class DataService {

  private apiUrl = `https://api.opendota.com/api/players/61104585/recentMatches/?api_key=${api_key}`;
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}
