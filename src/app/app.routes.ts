import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'; 
import {AboutComponent} from './about/about.component'; 
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ListComponent } from './list/list.component'; 
import { ProductRoutes } from './product/product.routes';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
  export const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    {path: 'home',component: HomeComponent},
    {path: 'about/:id',component: AboutComponent},
    {path: 'tempsignup',component: TemplateDrivenComponent },
    {path: 'reactivesignup',component: ReactiveFormsComponent },
    {path: 'dataservices',component: ListComponent},
    {path: 'product',children: ProductRoutes},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    ];