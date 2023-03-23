import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { fkrev } from './fkrev/fkrev';
@Injectable({
  providedIn: 'root'
})
export class FkrevService {

  public error!:String;

  constructor(private http: HttpClient) { }
  private apiUrl = environment.base_url;
  public predict(url: String): Observable<any> {
    return this.http.post<any>(this.apiUrl + "predict", url);
  }

  public refresh(): Observable<String> {
    return this.http.get<String>(this.apiUrl + "refresh");
  }
}
