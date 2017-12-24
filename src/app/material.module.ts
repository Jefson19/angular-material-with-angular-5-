import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule

} from '@angular/material';


@NgModule({
    // declarations: [
    //   AppComponent
    // ],
    imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatInputModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule
      
      
    ],
    exports:[
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatInputModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule
    ]
  })
  export class MaterialModule { }
  