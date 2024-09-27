import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule để sử dụng currency pipe

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // Thêm CommonModule vào phần imports
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      name: 'Rompi Berkancing',
      price: 119.99,
      stock: 25,
      sold: 320,
      image: 'https://via.placeholder.com/40',
      active: true
    },
    {
      name: 'Product 2',
      price: 80.50,
      stock: 12,
      sold: 150,
      image: 'https://via.placeholder.com/40',
      active: false
    },
    {
      name: 'Product 3',
      price: 50.00,
      stock: 30,
      sold: 220,
      image: 'https://via.placeholder.com/40',
      active: true
    }
  ];
}
