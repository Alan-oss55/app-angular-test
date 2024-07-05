import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDitailComponent } from './pages/product-ditail/product-ditail.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductDitailComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full' }

];
