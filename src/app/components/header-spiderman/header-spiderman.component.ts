import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-spiderman',
  templateUrl: './header-spiderman.component.html',
  styleUrls: ['./header-spiderman.component.css']
})
export class HeaderSpidermanComponent implements OnInit {

  title:string="MARVEL";

  constructor() { }

  ngOnInit(): void {
  }

}
