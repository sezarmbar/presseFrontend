import {MatButtonModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatInputModule,MatChipsModule,MatDatepickerModule,MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [MatInputModule,MatChipsModule,MatDatepickerModule,MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule]
})
export class MaterialModule { }
