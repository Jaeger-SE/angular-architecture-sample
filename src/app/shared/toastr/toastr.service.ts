import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable()
export class ToastrService {

  constructor({ showProgressBar = false }: { showProgressBar?: boolean }) {
    toastr.options.progressBar = showProgressBar;
  }

  success(toastrOptions: ToastrOptions): void {
    toastr.success(toastrOptions.text, '');
  }

  error(toastrOptions: ToastrOptions): void {
    toastr.error(toastrOptions.text, '');
  }

  info(toastrOptions: ToastrOptions): void {
    toastr.info(toastrOptions.text, '');
  }

  warning(toastrOptions: ToastrOptions): void {
    toastr.warning(toastrOptions.text, '');
  }

  clear() {
    toastr.clear();
  }
}

export interface ToastrOptions {
  text?: string;
  backgroundColor?: string;
}
