import { ArquivoEtapaEntitie } from '../../entities/arquivo-etapa.entite';
import { ArquivoEtapaService } from './../../service/arquivo-etapa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquivo-etapa',
  standalone: true,
  imports: [],
  templateUrl: './arquivo-etapa.component.html',
  styleUrl: './arquivo-etapa.component.css'
})
export class ArquivoEtapaComponent implements OnInit {
  constructor(private arquivoEtapaService: ArquivoEtapaService) {}

  listaArquivoEtapa!: ArquivoEtapaEntitie[];

  ngOnInit(){
    this.arquivoEtapaService.getArquivoEtapas(1).subscribe((data) => this.listaArquivoEtapa = data);
    console.log(this.listaArquivoEtapa);
  }
}
