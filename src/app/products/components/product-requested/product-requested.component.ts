import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-requested',
  templateUrl: './product-requested.component.html',
  styleUrls: ['./product-requested.component.scss']
})
export class ProductRequestedComponent implements OnInit {

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/dashboard/account'])

  }
}
