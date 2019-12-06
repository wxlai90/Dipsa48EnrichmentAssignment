import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../comment'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-onegame',
  templateUrl: './onegame.component.html',
  styleUrls: ['./onegame.component.scss']
})
export class OnegameComponent implements OnInit {

  id = 0;
  results = {};
  model = new Comment("", "");
  comments = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
    });

    this.findDetailsById(this.id);
    this.fetchComments(this.id);
  }

  findDetailsById(id: number) {
    fetch(`http://localhost:3000/api/category/id/${id}`)
      .then(resp => resp.json())
      .then(resp => this.results = resp);
  }

  fetchComments(id: number) {
    fetch(`http://localhost:3000/api/comments/${id}`)
      .then(resp => resp.json())
      .then(resp => this.comments = resp);
  }

  addComment(form: NgForm) {
    let comment = { ...this.model, gameid: this.id };

    fetch('http://localhost:3000/api/comment/new',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
      }
    )
      .then(resp => this.fetchComments(this.id));
  }
}
