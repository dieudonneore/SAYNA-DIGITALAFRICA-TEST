import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdversairesSpidermanComponent } from './components/adversaires-spiderman/adversaires-spiderman.component';
import { AproposSpidermanComponent } from './components/apropos-spiderman/apropos-spiderman.component';
import { ContentSpidermanComponent } from './components/content-spiderman/content-spiderman.component';
import { HerosSpidermanComponent } from './components/heros-spiderman/heros-spiderman.component';

const routes: Routes = [
  {path:'accueil', component:ContentSpidermanComponent},
  {path:'adversaires', component:AdversairesSpidermanComponent},
  {path:'heros', component:HerosSpidermanComponent},
  {path:'apropos', component:AproposSpidermanComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
