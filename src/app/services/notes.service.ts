import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  host = environment.host;

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get<any>(this.host);
  }

  create(note: any){
    console.log(note)
    return this.http.post<any>(this.host, note);
  }

  update(note: any, archived: any){
    return this.http.put<any>(`${this.host}${note}`, archived);
  }

  delete(note: any){
    return this.http.delete<any>(`${this.host}${note}`);
  }

  show(note: any){
    return this.http.get<any>(`${this.host}${note}`);
  }


}
