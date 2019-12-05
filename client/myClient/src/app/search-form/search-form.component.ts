import { Component, OnInit } from '@angular/core';
import { Query } from '../query'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  model = new Query("", "");

  results = null;

  searchGames(form: NgForm) {
    const searchString = form.controls['searchString'].value;
    const type = form.controls['type'].value;
    switch (type) {
      case "name":
        this.findGamesByName(searchString);
        break
      case "category":
        this.findGamesByCategory(searchString);
        break
      default:
        break
    }
  }


  findGamesByName(name: string) {
    fetch(`http://localhost:3000/api/name/${name}`)
      .then(resp => resp.json())
      .then(resp => this.results = resp)
      .then(resp => console.log(this.results));
  }

  findGamesByCategory(category: string) {
    fetch(`http://localhost:3000/api/category/${category}`)
      .then(resp => resp.json())
      .then(resp => this.results = resp)
      .then(resp => console.log(this.results));
  }

  findDetailsById(id: number) {
    fetch(`http://localhost:3000/api/game/${id}`)
      .then(resp => resp.json())
      .then(resp => this.results = resp)
      .then(resp => console.log(this.results));
  }
}
