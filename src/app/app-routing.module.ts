import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
//import { RecipesComponent } from './components/recipes/recipes.component';
//import { DetailComponent } from './components/recipes/detail/detail.component';
//import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrazioneComponent } from './components/user/registrazione/registrazione.component';
import { AddRecipeComponent } from './components/user/add-recipe/add-recipe.component';
import { EsempioCombineComponent } from './components/esempio-combine/esempio-combine.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ResultComponent } from './components/recipes/result/result.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'ricette', component: RecipesComponent, children: [
  //   {path: 'dettaglio/:title/:_id', component: DetailComponent},
  //   {path: '', pathMatch: 'full', component: RecipesListComponent},
  // ]},
  {path: 'registrati', component: RegistrazioneComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profilo', component: ProfileComponent, canActivate: [LoggedInGuard]},
  {path: 'addRecipe', component: AddRecipeComponent, canActivate: [LoggedInGuard]},
  {path: 'combine', component: EsempioCombineComponent},
  {path: 'ricerca', component: ResultComponent},
  {path: 'ricette', loadChildren: () => import("./components/recipes/recipes.module").then(modulo => modulo.RecipesModule)},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
