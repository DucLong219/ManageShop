import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss']
})
export class ModalConfirmDeleteComponent implements OnInit {
  name : string | undefined;
  @Input() categoryDeteil:any;
  @Output() checkEvent = new EventEmitter();
  ngOnInit(): void {
    
  }
  confirmDelete(){
    this.checkEvent.emit(true);
  }
}
