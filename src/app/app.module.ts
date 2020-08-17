import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtomComponent } from './atom/atom.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { MoreInfoComponent } from './more-info/more-info.component';
import { AppRoutingModule } from './app-routing.module';  
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'more-info/:id', component: MoreInfoComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    AtomComponent,
    MoreInfoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
