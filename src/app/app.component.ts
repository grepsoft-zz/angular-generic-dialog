import { Component } from '@angular/core';
import { DialogServiceService } from './GenericConfirmationDialog/dialog-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Confirmation Dialog Demo';

  /**
   *
   */
  constructor(private dialogService: DialogServiceService) {  }

  openYesNoDialog() {

    this.dialogService.open(
      {
        title: 'Subscribe',
        message: 'Do you want to subscribe to this channel?',
        positive: 'Yes',
        negative: 'No',
        neutral: 'Not sure'
      })
      .then(result => {
        console.log(result);
    }, () => {});
  }
}
