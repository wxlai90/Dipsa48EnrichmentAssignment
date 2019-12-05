import { Component, OnInit } from '@angular/core';
import { Query } from '../query'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Query("", "");

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
      .then(resp => console.log(resp));
  }

  findGamesByCategory(category: string) {
    fetch(`http://localhost:3000/api/category/name/${category}`)
      .then(resp => resp.json())
      .then(resp => console.log(resp));
  }

  findDetailsById(category: string) {
    fetch(`http://localhost:3000/api/category/name/${category}`)
      .then(resp => resp.json())
      .then(resp => console.log(resp));
  }
}
