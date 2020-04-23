import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DialogComponent } from './GenericConfirmationDialog/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
