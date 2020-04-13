import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [TopNavComponent, FormComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [TopNavComponent]
})
export class LibraryModule { }
