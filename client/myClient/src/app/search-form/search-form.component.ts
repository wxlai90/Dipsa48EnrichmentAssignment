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
  }


  findGameByName(name: string) {
    fetch(`http://localhost:3000/api/name/${name}`)
      .then(resp => resp.json());
  }
}
