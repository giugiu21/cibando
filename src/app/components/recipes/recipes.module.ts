import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RecipeRoutingModule } from "./recipes-routing.module";

import { RecipesComponent } from "./recipes.component";
//import addRecipeComponent
import { DetailComponent } from "./detail/detail.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipeCardComponent } from "src/app/shared/recipe-card/recipe-card.component";
import { ResultComponent } from './result/result.component';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeCardComponent,
        RecipesListComponent,
        DetailComponent,
        ResultComponent,
        //AddRecipeComponent,
      
    ],
    imports: [
      CommonModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      PaginatorModule,
      ToastModule,
      CKEditorModule,
      RecipeRoutingModule,
      HttpClientModule,
    ],
    exports: [RecipeCardComponent]
  })

  export class RecipesModule {}
