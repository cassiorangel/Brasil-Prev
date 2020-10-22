import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../pokemon.service';

import { BuscaPokemonComponent } from './busca-pokemon.component';

describe('BuscaPokemonComponent', () => {
  let component: BuscaPokemonComponent;
  let fixture: ComponentFixture<BuscaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaPokemonComponent ],
      providers: [
        {
          provider: PokemonService,
          useValue: {}
        },
        {
          provider: FormBuilder,
          useValue: {}
        },
      ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
