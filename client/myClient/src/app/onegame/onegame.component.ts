import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onegame',
  templateUrl: './onegame.component.html',
  styleUrls: ['./onegame.component.scss']
})
export class OnegameComponent implements OnInit {

  id = 0;
  results = {};

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
    });

    this.findDetailsById(this.id);
  }

  findDetailsById(id: number) {
    fetch(`http://localhost:3000/api/category/id/${id}`)
      .then(resp => resp.json())
      .then(resp => this.results = resp);
  }
}
