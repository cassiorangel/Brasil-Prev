import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDetalheComponent } from 'src/app/shared/modal-detalhe/modal-detalhe.component';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {

  bsModalRef: BsModalRef;

  listPokemon: any[];

  public dadosModal: Subscription;

  public listaIncricao: Subscription;

  constructor(
    private pokemonService: PokemonService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    return this.listaIncricao = this.pokemonService.getListPokemon()
      .subscribe(res => {
        this.listPokemon = res['cards']
        this.ordenaNome(this.listPokemon);

      },
        error => console.log(error.message))
  }

  ordenaNome(dadosArray) {
    return dadosArray.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
  }

  detalhe(id) {
    this.listDetalhe(id);
  }

  listDetalhe(id) {
    this.dadosModal = this.pokemonService.detalhePokemon(id)
      .subscribe(res => {
        this.bsModalRef = this.modalService.show(ModalDetalheComponent, { class: 'gray modal-lg' });
        this.trataObjetoModal(res['cards']);
      }, error => console.log(error));
  }

  trataObjetoModal(objArray) {
    return objArray.map(res => {
      this.bsModalRef.content.name = res['name']
      this.bsModalRef.content.closeBtnName = 'Fechar';
      this.bsModalRef.content.imagem = res['imageUrlHiRes'];
      this.bsModalRef.content.id = res['id'];
      this.bsModalRef.content.resistances = res['resistances'];
      this.bsModalRef.content.weaknesses = res['weaknesses'];
      this.bsModalRef.content.attacks = res['attacks'];
    });
  }

  ngOnDestroy(): void {
    this.listaIncricao.unsubscribe();
    this.dadosModal.unsubscribe();
  }

}
