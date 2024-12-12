import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root', // Servicio disponible globalmente
})

export class LoginService {
  private urlBackend = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<any> {
    return this.http.get(`${this.urlBackend}/api/${id}`);
  }
}
