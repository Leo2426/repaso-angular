import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  notFoundUrl?: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.notFoundUrl = this.router.url;
  }
}
