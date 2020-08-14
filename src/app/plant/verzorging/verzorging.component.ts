import { Component, OnInit, Input  } from '@angular/core';
import { Verzorging } from '../verzorging.model';

@Component({
  selector: 'app-verzorging',
  templateUrl: './verzorging.component.html',
  styleUrls: ['./verzorging.component.css']
})
export class VerzorgingComponent implements OnInit {

  @Input() verzorging: Verzorging;  

  constructor() { }

  ngOnInit(): void {
  }

}
