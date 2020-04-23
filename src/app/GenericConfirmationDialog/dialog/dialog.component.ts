import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  
  public title = 'todo: set later';
  public message = 'todo: set later';
  public positive = null;
  public negative = null;
  public neutral = null;

  constructor(public activeModal: NgbActiveModal) {}

  buttons: any[] = [{ value: 'One' }, { value: 'Two' }, { value: 'Three' }];

  ngOnInit() { }

  setDialogProps(props: any) {
    this.title = props.title || 'Dialog';
    this.message = props.message;
    this.positive = props.positive || null;
    this.negative = props.negative || null;
    this.neutral = props.neutral || null;
  }

  actionTaken(result: any) {

    this.activeModal.close(JSON.stringify(result));
  }

}
