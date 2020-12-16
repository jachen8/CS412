import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../data';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  @Input() selectedCity: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
