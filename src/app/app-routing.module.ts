import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'; 
import {AboutComponent} from './about/about.component'; 
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { routes } from "./app.routes";


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
