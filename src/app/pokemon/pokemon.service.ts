import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API = `${environment.API}`;

  private readonly API_BUSCA = `${environment.API}?name=`;
  constructor(
    private http: HttpClient
  ) { }

  getListPokemon() {
    return this.http.get(this.API);
  }

  searchPokemon(name) {
    return this.http.get(this.API_BUSCA + name)
  }
}
