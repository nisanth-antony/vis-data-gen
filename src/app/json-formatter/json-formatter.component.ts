import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import JSONFormatter from 'json-formatter-js'

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent implements OnInit {
        
  jsonData!:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  beautifyJson(){
    const myJSON = JSON.parse(this.jsonData);
    const formatter = new JSONFormatter(myJSON);
    document.getElementById('dataDisplay')?.appendChild(formatter.render());
  }
  home(){
    this.router.navigate([''])
  }
}
