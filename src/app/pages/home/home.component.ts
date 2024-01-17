import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  constructor() {}
  
  data: any[] = [
    { category: 'January', value: 20 },
    { category: 'February', value: 30 },
    // Add more data points as needed
  ];
}
