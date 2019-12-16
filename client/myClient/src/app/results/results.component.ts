import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() results: any[];

 id = 'ID';
 pic = 'Thumbnail';
 name = 'Name';
 year = 'Year';
 avg = 'Average';

constructor() { }

ngOnInit() {


  }


  changeValues = () => {
    if (this.results[0].image !== null) {
      this.id = 'id';
      this.pic = 'image';
      this.name

    }


  }




}
