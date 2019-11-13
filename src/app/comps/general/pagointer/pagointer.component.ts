import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagointer',
  templateUrl: './pagointer.component.html',
  styleUrls: ['./pagointer.component.css']
})
export class PagointerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() moveitem:EventEmitter<number> = new EventEmitter<number>();
  
  moveitempage(delta:number):void{
    console.log("pagointercompeter "+delta)
    this.moveitem.emit(delta)

  }

}
