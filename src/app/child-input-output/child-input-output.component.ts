import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-input-output',
  templateUrl: './child-input-output.component.html',
  styleUrls: ['./child-input-output.component.css']
})
export class ChildInputOutputComponent {

  parentValue="";
  @Input() childValue="";
  @Output() parentEvent = new EventEmitter();
  
  passToParent(){
    this.parentEvent.emit(this.parentValue);
  }
  constructor(){}
}
