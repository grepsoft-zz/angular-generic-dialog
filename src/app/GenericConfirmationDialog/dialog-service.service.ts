import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  private modalRef;

  constructor(private ngbModal: NgbModal) {}

  open(props): Promise<any> {
    this.modalRef = this.ngbModal.open(DialogComponent, {
      size: 'sm',
      backdrop: 'static',
    });

    this.modalRef.componentInstance.setDialogProps(props);
    return this.modalRef.result;
  }

}
