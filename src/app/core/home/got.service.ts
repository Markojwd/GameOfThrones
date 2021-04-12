import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  private baseUrl = 'https://www.anapioficeandfire.com/api';

  constructor(private http: HttpClient) {}

  loadAllHouses(): any {
    return this.http.get<any>(`${this.baseUrl}/houses`);
  }

  loadAllBooks(): any  {
    return this.http.get<any>(`${this.baseUrl}/books`, { observe: 'body' });
  }

  loadAllCharacters(): any  {
    return this.http.get<any>(`${this.baseUrl}/characters`);
  }

  loadBook(bookId): any  {
    return this.http.get<any>(`${this.baseUrl}/books/${bookId}`);
  }

  loadCharacter(characterId): any  {
    return this.http.get<any>(`${this.baseUrl}/characters/${characterId}`);
  }

  loadHouse(houseId): any  {
    return this.http.get<any>(`${this.baseUrl}/houses/${houseId}`);
  }

}
