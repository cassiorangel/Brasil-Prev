import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API = `${environment.API}`;

  constructor(
    private http: HttpClient
  ) { }

  getListPokemon() {
    return this.http.get(this.API);
  }
}
