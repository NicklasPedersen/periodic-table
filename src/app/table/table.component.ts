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
  initData(res) {
    this.atoms = res.slice;
    this.actinoids = this.atoms.splice(88, 15);
    this.lanthanoids = this.atoms.splice(56, 15);
  }
  ngOnInit() {
      this.dataService.refreshData((res: Atom[]) => {
      this.atoms = [...res];
      this.actinoids = this.atoms.splice(88, 15);
      this.lanthanoids = this.atoms.splice(56, 15);
    });
  }
}
