import { Component, OnInit } from '@angular/core';
import { WooCommerce } from '../app.module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor() {
    WooCommerce.get('')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {}
}
