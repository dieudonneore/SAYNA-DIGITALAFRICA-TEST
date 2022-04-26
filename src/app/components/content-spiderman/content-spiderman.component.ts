import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-spiderman',
  templateUrl: './content-spiderman.component.html',
  styleUrls: ['./content-spiderman.component.css']
})
export class ContentSpidermanComponent implements OnInit {

  spidermanTitle:string="SPIDERMAN";
  message:string="L'araignée sympa du quartier";
  spidermandescriptionTitle:string="LES SPIDERMANS AU CINÉMA";
  spidermandescrition: string="Spiderman a pu bénéficier de reboot qui ont permis d'adapter ses histoires pour chaque générations !";

  constructor() { }

  ngOnInit(): void {
  }

}
