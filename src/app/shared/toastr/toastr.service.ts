import { Injectable } from '@angular/core';

@Injectable()
export class ToastrService {

  constructor() { }

  toast(toastrOptions: ToastrOptions): void {
    console.log(toastrOptions);
  }

}

export interface ToastrOptions {
  text: string;
  backgroundColor: string;
}
