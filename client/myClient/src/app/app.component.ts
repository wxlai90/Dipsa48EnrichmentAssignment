import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'myClient';
  state = {
    queryString: '',
    queryResults: []
  }

  handleInput(e){
    this.state.queryString = e.target.value;
  }

  handleSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:3000/api/name/${this.state.queryString}`)
    .then(resp => resp.json())
    .then(resp => this.state.queryResults = resp);
  }
}
