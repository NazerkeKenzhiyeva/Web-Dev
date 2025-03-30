import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product">
      <span>{{ product.name }}</span>
      <button (click)="like()">Like ({{ product.likes }})</button>
      <button (click)="remove.emit()">Remove</button>
    </div>
  `,
  styles: [`.product { margin: 10px 0; display: flex; gap: 10px; }`]
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<void>();
  like() { this.product.likes++; }
}
