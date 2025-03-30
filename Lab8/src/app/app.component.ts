import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './products/product-list.component';
import { ApiService } from './services/api.service';

interface Product {
  id?: number;
  name: string;
  description: string;
  rating: number;
  images: string[];
  link: string;
  likes: number;
}

interface Category {
  id?: number;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <h1>Online Store</h1>
    <div *ngFor="let category of categories" (click)="selectCategory(category)" class="category">
      {{ category.name }}
    </div>
    <app-product-list *ngIf="selectedCategory" [products]="selectedCategory.products"></app-product-list>
  `,
  styles: [`.category { cursor: pointer; font-weight: bold; margin: 10px 0; }`]
})
export class AppComponent implements OnInit {
  categories: Category[] = [
    { name: 'Очистители', products: [{ name: 'Salton Очиститель', description: 'Активная пена.', rating: 4.5, images: [], link: '', likes: 0 }] },
    { name: 'Музыкальные инструменты', products: [{ name: 'Yamaha F310', description: 'Акустическая гитара.', rating: 4.8, images: [], link: '', likes: 0 }] },
    { name: 'Одежда', products: [{ name: 'Nike Air Force 1', description: 'Кроссовки белые.', rating: 4.9, images: [], link: '', likes: 0 }] },
    { name: 'Книги', products: [{ name: 'Фантастика', description: 'Книга жанра фантастика.', rating: 4.7, images: [], link: '', likes: 0 }] }
  ];

  selectedCategory: Category | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCategories().subscribe(
      (apiCategories: any[]) => {
        console.log('✅ Категории из API:', apiCategories);
    
        if (apiCategories.length > 0) {
          const apiFormattedCategories: Category[] = apiCategories.map((apiCategory: any) => ({
            id: apiCategory.id,
            name: apiCategory.name,
            products: Array.isArray(apiCategory.products) 
              ? (apiCategory.products as Product[]).map((product: Product) => ({
                  ...product,
                  likes: product.likes ?? 0
                }))
              : []
          }));
    
          this.categories = [...this.categories, ...apiFormattedCategories];
        }
      },
      (error) => console.error('❌ Ошибка загрузки категорий:', error)
    );
    
    
  }

  selectCategory(category: Category) {
    if (category.id) {
      this.apiService.getProductsByCategory(category.id).subscribe(
        (products: Product[]) => {
          console.log(`✅ Товары для категории "${category.name}":`, products);
          this.selectedCategory = { 
            ...category, 
            products: products.map(product => ({
              ...product,
              likes: product.likes ?? 0 // 🔥 Если у продукта нет likes, добавляем 0
            }))
          };
        },
        (error) => console.error(`❌ Ошибка при загрузке товаров:`, error)
      );
    } else {
      this.selectedCategory = category;
    }
  }
}
