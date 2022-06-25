import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {}

let dialogCount = 0;

@Component({
  selector: 'app-dialog',
  template: `
    <ng-template #dialog>
      <router-outlet></router-outlet>
    </ng-template>
  `,
})
export class DialogRouteComponent implements AfterViewInit {
  @ViewChild('dialog') dialogTemplate: any;

  constructor(private _dialog: MatDialog) {
    /* alert(`Dialog nested in itself ${++dialogCount}`); */
  }

  ngAfterViewInit(): void {
    debugger;
    this._dialog.open(this.dialogTemplate);
  }
}
