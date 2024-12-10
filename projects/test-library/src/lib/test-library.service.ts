import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestLibraryService {

  constructor() { }

  logMessage(message: string) {
    console.log(message);
  }
}
