import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [],

  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  // template: '<h1> Hello iam from inline template</h1>',

  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myfirst-angular-project';
}
