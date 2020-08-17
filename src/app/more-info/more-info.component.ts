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
  atom: Atom = new Atom();
  constructor(
    private route: ActivatedRoute,
    public dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dataService.refreshData(res => {
        // we get an id based on atomicNumber so we have to transpose that range from 1-118 to 0-117 by subtracting 1
        this.atom = res[params['id'] - 1];
      });
    });
  }

}
