import { Component, OnInit } from '@angular/core';
import { ConveniosService } from '../vendas/convenios.service';

@Component({
  selector: 'app-convenios-listagem',
  templateUrl: './convenios-listagem.component.html',
  styleUrls: ['./convenios-listagem.component.css']
})
export class ConveniosListagemComponent implements OnInit {

  convenios: Array<any>;

  constructor(private conveniosService: ConveniosService) { }

  ngOnInit() {
    this.conveniosService.listaConvenios()
      .subscribe(response => this.convenios = response);
  }

}
