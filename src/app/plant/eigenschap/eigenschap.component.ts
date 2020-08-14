import { Component, OnInit, Input } from '@angular/core';
import { Eigenschap } from '../eigenschap.model';

@Component({
  selector: 'app-eigenschap',
  templateUrl: './eigenschap.component.html',
  styleUrls: ['./eigenschap.component.css']
})
export class EigenschapComponent implements OnInit {

  @Input() eigenschap: Eigenschap; 

  constructor() { }

  ngOnInit(): void {
  }

}
