import { Routes } from "@angular/router";
import { ProductComponent } from "./product.component";
import {ProductAddComponent} from '../product-add/product-add.component';
import {ProductUpdateComponent} from '../product-update/product-update.component';

export const ProductRoutes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'add', component: ProductAddComponent },
    { path: ':id/edit', component: ProductUpdateComponent }
  ]