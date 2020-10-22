import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-detalhe',
  templateUrl: './modal-detalhe.component.html',
  styleUrls: ['./modal-detalhe.component.scss']
})
export class ModalDetalheComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() resistances;
  @Input() closeBtnName: string;
  @Input() imagem: string;
  @Input() weaknesses;
  @Input() attacks;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }
  onClose() {
    this.bsModalRef.hide()
  }

}
