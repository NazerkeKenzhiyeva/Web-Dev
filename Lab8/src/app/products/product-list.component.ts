import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../products/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <h2>Products</h2>
    <app-product-item *ngFor="let product of products" [product]="product" (remove)="removeProduct(product)"></app-product-item>
  `
})
export class ProductListComponent {
  @Input() products: any[] = [];
  removeProduct(product: any) {
    this.products = this.products.filter(p => p !== product);
  }
}