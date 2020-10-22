import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PokemonService } from '../pokemon.service';

import { ListaPokemonComponent } from './lista-pokemon.component';

describe('ListaPokemonComponent', () => {
  let component: ListaPokemonComponent;
  let fixture: ComponentFixture<ListaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPokemonComponent ],
 
      providers: [
        {
          provide: PokemonService,
          useValue: {}
        },
        {
          provide: BsModalService,
          useValue: {}
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
