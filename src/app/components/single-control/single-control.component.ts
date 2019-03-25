import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-single-control',
  templateUrl: './single-control.component.html',
  styleUrls: ['./single-control.component.scss']
})
export class SingleControlComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() name: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
