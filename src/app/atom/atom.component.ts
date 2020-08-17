import { Component, OnInit, Input } from '@angular/core';
import { Atom } from '../atom.model';

@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css']
})
export class AtomComponent {
  @Input() atom: Atom;
}
