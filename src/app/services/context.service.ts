import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContextService {
  private url: string = 'https://pokeapi.co/api/v2'
  public fetched: EventEmitter<any> = new EventEmitter()

  constructor(private httpClient: HttpClient) { }

  fetch(resource?: string){
    this.httpClient.get(this.url + (resource || "")).subscribe(
      res => this.fetched.emit(res)
  )}

}
