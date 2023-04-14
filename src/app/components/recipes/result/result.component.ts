import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{

  search: string;
  ricetteTrovate: Recipe[];

  constructor(private recipeService: RecipeService){}
  
  ngOnInit(): void {
    this.recipeService.search.subscribe((res: any) => {
        this.search = res;
      })
      this.getResults(this.search);
      
  }

  getResults(search: string){
    this.recipeService.getRecipesSearch(search).subscribe({
      next: (res) =>{
        this.ricetteTrovate = res;
      },
      error: (err) => console.log(err)
    })
  }


}
