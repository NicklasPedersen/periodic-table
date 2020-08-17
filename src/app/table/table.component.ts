import { Component, OnInit, Input } from '@angular/core';
import { Atom, reformat } from '../atom.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() atoms: Atom[];
  @Input() lanthanoids: Atom[];
  @Input() actinoids: Atom[];
  constructor(private dataService: DataService) { }
  ngOnInit() {
      this.dataService.refreshData((res: Atom[]) => {
      // destructuring operator, it just clones the whole array
      this.atoms = [...res];
      // take out the actinoids and lanthanoids from the array
      this.actinoids = this.atoms.splice(88, 15);
      this.lanthanoids = this.atoms.splice(56, 15);
    });
  }
}
