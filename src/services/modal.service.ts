import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  open(id: string) {
    setTimeout(() => {
      $("#" + id).modal('show');
    }, 100);
  }

  close(id: string) {
    setTimeout(() => {
      $("#" + id).modal('hide');
    }, 10);
  }

  closeAll() {
    $(".modal").modal('hide');
  }
}
