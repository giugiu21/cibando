import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/logged-in.guard';


import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
//import { AddRecipeComponent } from './../user/add-recipe/add-recipe.component';

const routes: Routes = [
    {path: '', component: RecipesComponent, children: [
        {path: 'ricette', component: RecipesComponent},
        {path: 'dettaglio/:title/:_id', component: DetailComponent},
        {path: '', pathMatch: 'full', component: RecipesListComponent},
      ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipeRoutingModule {}