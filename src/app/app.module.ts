import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent, DialogRouteComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, DialogRouteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DialogRouteComponent,
      },
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
