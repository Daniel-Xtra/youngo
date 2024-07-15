import { Component } from '@angular/core';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { CommonModule } from '@angular/common';

enum Products {
  AUTH = 'AUTH',
  NEWS = 'NEWS',
  GUIDIANCE = 'GUIDIANCE',
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedComponentsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = Products;
  activeTab: Products = this.products.AUTH;

  tabChange(tab: Products) {
    this.activeTab = tab;
  }
}
