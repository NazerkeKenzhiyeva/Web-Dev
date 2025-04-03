import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class AboutComponent {
  title = 'About the Project';
  description = 'This project is dedicated to exploring the beauty of simplicity and functionality.';
}
