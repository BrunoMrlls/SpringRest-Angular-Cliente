import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  venda: any;
  item: any;
  clientes: Array<any>;
  produtos: Array<any>;
  @Output() vendaSalva = new EventEmitter();

  constructor(private vendaService: VendasService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.vendaService.listarClientes()
    .subscribe(response => this.clientes = response);

    this.vendaService.listarProdutos()
    .subscribe(response => this.produtos = response);

    this.novaVenda();
  }

  incluirItem() {
    this.item.total = this.item.produto.valor * this.item.quantidade; // calcula total

    this.venda.items.push(this.item); // adiciona item na venda

    this.item = {}; // limpa item

    this.calcularTotal();
  }

  calcularTotal() {
    const totalItens = this.venda.items
      .map(i => (i.produto.valor * i.quantidade))
      .reduce((total, v) => total + v , 0);

    this.venda.total = totalItens + this.venda.frete;
  }

  adicionar(frm: FormGroup) {
    this.vendaService.adicionar(this.venda).subscribe(response => {
      frm.reset();
      this.novaVenda();

      this.messageService.add({ severity: 'success' ,
        detail: 'Venda adicionada com sucesso.' });

      this.vendaSalva.emit(response);
    });
  }

  novaVenda() {
    this.venda = { items: [], frente: 0.0, total: 0.0 };
    this.item = {};
  }
}
