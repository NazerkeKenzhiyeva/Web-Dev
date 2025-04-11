import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // обязательно!
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';
import { HhService } from '../../services/hh.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule], // обязательно!
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompany: Company | null = null;

  constructor(private hhService: HhService) {}

  ngOnInit(): void {
    this.hhService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  showVacancies(company: Company): void {
    this.selectedCompany = company;
    this.hhService.getVacanciesByCompany(company.id).subscribe((data) => {
      this.vacancies = data;
    });
  }
}
