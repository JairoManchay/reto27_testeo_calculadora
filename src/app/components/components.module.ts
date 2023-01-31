import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFormComponent } from './select-form/select-form.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    SelectFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule

  ],
  exports:[
    SelectFormComponent
  ]
})
export class ComponentsModule { }
