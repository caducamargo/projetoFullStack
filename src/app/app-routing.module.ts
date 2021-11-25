import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaricaturasComponent } from './components/template/caricaturas/caricaturas.component';
import { GlitterComponent } from './components/template/glitter/glitter.component';
import { HomeComponent } from './components/template/home/home.component';
import { MagicasComponent } from './components/template/magicas/magicas.component';
import { PerolasComponent } from './components/template/perolas/perolas.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'caricaturas',component: CaricaturasComponent},
  {path:'glitter',component: GlitterComponent},
  {path:'magicas',component: MagicasComponent},
  {path:'perolas',component: PerolasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
