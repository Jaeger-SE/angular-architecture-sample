import { ApplicationRef, ComponentFactoryResolver, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrService } from './toastr.service';

export function toastrServiceFactory(showProgressBar: boolean) {
  return new ToastrService({
    showProgressBar: showProgressBar
  });
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ToastrModule {
  static forRoot(showProgressBar: boolean): ModuleWithProviders {
    return {
      ngModule: ToastrModule,
      providers: [
        {
          provide: ToastrService,
          useFactory: () => toastrServiceFactory(showProgressBar),
          deps: []
        }
      ]
    };
  }
}
