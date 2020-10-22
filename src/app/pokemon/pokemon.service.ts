import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API = `${environment.API}`;

  private readonly API_BUSCA = `${environment.API}?name=`;

  private readonly API_DETALHE = `${environment.API}?id=`;

  constructor(
    private http: HttpClient
  ) { }

  getListPokemon() {
    return this.http.get(this.API);
  }

  searchPokemon(name) {
    return this.http.get(this.API_BUSCA + name)
  }

  detalhePokemon(id) {
    return this.http.get(this.API_DETALHE + id)
  }

}
