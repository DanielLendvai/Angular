import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import Heroes from '../interfaces/Heroes';
import recentMatches from '../interfaces/RecentMatches';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private api_key = '316D2CF32BA849AAA83CB03950843C9B';

  private apiUrl2 = `https://api.opendota.com/api/players/61104585/recentMatches/?api_key=${this.api_key}`;
  private apiUrl = `https://api.opendota.com/api/heroes/?api_key=${this.api_key}`;

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<Heroes> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data) =>
        data.map((item: { id: any; localized_name: any }) => ({
          id: item.id,
          name: item.localized_name,
        }))
      )
    );
  }
  getRecentMatches(): Observable<recentMatches> {
    return this.http.get<any>(this.apiUrl2);
  }
}
