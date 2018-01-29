import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDaysPipe } from './pipes/add-days.pipe';
import { ToastrModule } from './toastr/toastr.module';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule
  ],
  declarations: [AddDaysPipe],
  exports: [AddDaysPipe]
})
export class SharedModule { }
