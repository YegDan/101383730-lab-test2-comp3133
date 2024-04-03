import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpacexLaunch } from '../spacex-launch';
@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getLaunches():Observable<SpacexLaunch[]> {
    return this.http.get<SpacexLaunch[]>(this.apiUrl);
  }

  getLaunchesByYear(year: number):Observable<SpacexLaunch[]> {
    const url = `${this.apiUrl}?launch_year=${year}`;
    return this.http.get<SpacexLaunch[]>(url);
  }
}
