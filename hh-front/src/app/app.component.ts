import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ⬅️ добавили это
import { CompaniesComponent } from './components/companies/companies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CompaniesComponent], // ⬅️ добавили RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
}
