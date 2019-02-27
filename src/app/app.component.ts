import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editorOptions = {theme: 'vs-dark', language: 'java'};//light
  //code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  code: string = 'public x() {\nconsole.log("Hello world!");\n}';
}
