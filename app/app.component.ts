import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zadanie1';

  users = [
    { name: 'Jan Kowalski', age: 25, isActive: true },
    { name: 'Anna Nowak', age: 17, isActive: false },
    { name: 'Tomasz Wiśniewski', age: 30, isActive: false },
    { name: 'Katarzyna Zając', age: 22, isActive: true }
  ];

  aktywDez(user:User):void{
    user.isActive = !user.isActive;
  }
}
