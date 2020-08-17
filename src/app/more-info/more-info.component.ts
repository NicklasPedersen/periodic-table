import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Atom } from '../atom.model';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  id: number;
  atom: Atom = new Atom();
  constructor(
    private route: ActivatedRoute,
    public dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.dataService.refreshData(res => {
        this.atom = res[this.id];
      });
    });
  }

}
