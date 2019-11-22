import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss']
})
export class CategorySearchComponent implements OnInit {
  details = {};

  constructor(private route: ActivatedRoute) {
  }

  getGameDetails(){
    let id = this.route.snapshot.paramMap.get('id');
    fetch(`http://localhost:3000/api/game/${id}`)
    .then(resp => resp.json())
    .then(resp => this.details = resp);
  }

  ngOnInit() {
    this.getGameDetails();
  }

}
