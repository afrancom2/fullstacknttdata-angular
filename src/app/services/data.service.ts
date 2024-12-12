import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any;

  setData(value: any): void {
    this.data = value; // Almacena los datos
  }

  getData(): any {
    return this.data; // Devuelve los datos
  }

  clearData(): void {
    this.data = null; // Limpia los datos
  }
}
