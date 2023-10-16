import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { BundlecardComponent } from './store/components/bundlecard/bundlecard.component';
import {MatCardModule} from "@angular/material/card";
import { BundlesComponent } from './public/pages/bundles/bundles.component';
import { BundlesPresentationComponent } from './store/components/bundles-presentation/bundles-presentation.component';
import {NgOptimizedImage} from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    BundlecardComponent,
    BundlesComponent,
    BundlesPresentationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    NgOptimizedImage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
