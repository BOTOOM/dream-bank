import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dataMenu: Menu[] = [
    {
      Name: 'Accounts',
      Path: 'account'
    },
    {
      Name: 'New Product',
      Path: 'products'
    }
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigation(itemMenu: Menu) {
    console.log(itemMenu)
    this.router.navigate([`${itemMenu.Path}`]);
  }

}
