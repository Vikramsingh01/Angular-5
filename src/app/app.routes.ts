import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'; 
import {AboutComponent} from './about/about.component'; 
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


  export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'about/:id',component: AboutComponent},
    {path: 'tempsignup',component: TemplateDrivenComponent },
    {path: 'reactivesignup',component: ReactiveFormsComponent }
    ];