import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { ModalDetalheComponent } from './modal-detalhe.component';

describe('ModalDetalheComponent', () => {
  let component: ModalDetalheComponent;
  let fixture: ComponentFixture<ModalDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetalheComponent ],
      providers: [
        BsModalRef
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
