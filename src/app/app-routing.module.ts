import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './public/pages/home/home.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {BundlesComponent} from './public/pages/bundles/bundles.component';


const routes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'store/bundles', component: BundlesComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
