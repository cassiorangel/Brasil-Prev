import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
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
      schemas: [NO_ERRORS_SCHEMA],
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
