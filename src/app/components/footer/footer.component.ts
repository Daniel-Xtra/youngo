import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year!: any;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
