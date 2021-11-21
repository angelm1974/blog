import { Component, OnInit } from '@angular/core';
import { LUDZIE } from '../mock-ludzie';
@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.scss']
})
export class LudzieComponent implements OnInit {
  ludzie_l = LUDZIE;
  constructor() { }

  ngOnInit(): void {
  }

}
