import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  name: string;
  description: string;
  rating: number;
  images: string[];
  link: string;
  likes: number;
}

interface Category {
  id: number;
  name: string;
  products?: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/categories/`);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/categories/${categoryId}/products/`);
  }
}

