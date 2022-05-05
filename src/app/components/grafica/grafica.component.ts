import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Chart} from 'chart.js';

@Component({
  selector: 'my-grafic',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})

export class GraficaComponent implements OnInit {
  
  @Input('titulo') title: string= '' ;
  @Input('tiempo') time: string= 'Tiempo de Registro' ;
  @Input('btnActualizar') btnUpdate: string= 'Actualizar datos';
  @Input('grafica') chart: any;


  @Output('actualizar') buttonUpdate: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  update(event:any){
    this.buttonUpdate.emit(event);
  }

}
