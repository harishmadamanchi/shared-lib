import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestLibraryComponent } from './test-library.component';

@NgModule({
  declarations: [TestLibraryComponent],
  imports: [
    BrowserModule,
],
  providers: [],
  bootstrap: [TestLibraryComponent]
})
export class TestLibraryModule { 

}
