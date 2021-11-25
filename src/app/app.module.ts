import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/template/home/home.component';
import { CaricaturasComponent } from './components/template/caricaturas/caricaturas.component';
import { GlitterComponent } from './components/template/glitter/glitter.component';
import { MagicasComponent } from './components/template/magicas/magicas.component';
import { PerolasComponent } from './components/template/perolas/perolas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaricaturasComponent,
    GlitterComponent,
    MagicasComponent,
    PerolasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
