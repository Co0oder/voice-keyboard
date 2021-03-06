import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyboardModule } from './features/keyboard/keyboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    KeyboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
