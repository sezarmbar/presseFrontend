import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataService }from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { SearchPageComponent } from './pages/index';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent
  ],
  imports: [
    MaterialModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
