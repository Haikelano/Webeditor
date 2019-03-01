import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MonacoEditorModule , NgxMonacoEditorConfig} from 'ngx-monaco-editor';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ConfEditor} from './conf-editor';






  @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ConfEditor

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
