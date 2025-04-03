// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Импорт RouterModule для маршрутизации
import { routes } from './app.routes';  // Импорт маршрутов

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule]  // Убедитесь, что RouterModule правильно импортирован
})
export class AppComponent {
  title = 'album';
}
