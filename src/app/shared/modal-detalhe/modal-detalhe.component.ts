import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-detalhe',
  templateUrl: './modal-detalhe.component.html',
  styleUrls: ['./modal-detalhe.component.scss']
})
export class ModalDetalheComponent implements OnInit {

  @Input() title: string;
  @Input() item: string;
  @Input() closeBtnName: string;
  @Input() imagem: string;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }
  onClose() {
    this.bsModalRef.hide()
  }

}
