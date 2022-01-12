import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './service/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categoriesList: any = [];

  constructor(
    private _s: CategoriesService
  ) {}

  ngOnInit(): void {
    this._s.get(1).subscribe(
      data => {
        this.categoriesList = data;
      }
    )}
}
