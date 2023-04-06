import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { take } from 'rxjs';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

  ricettaInserita: any;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),
  })

  constructor( 
    private router: Router,
    private recipeService: RecipeService,
    private modalService: NgbModal){}

  onSubmit(){
    // console.log(this.form.value);
    const newRecipe = {
     title: this.form.value.title,
     description: this.form.value.description,
     image: this.form.value.image,
     difficulty: this.form.value.difficulty,
     published: true
    }

    this.recipeService.postRecipe(newRecipe).pipe(take(1))
    .subscribe({
      next: (res) => {
        console.log(res);
        this.ricettaInserita = res;
      },
      error: (err) => {
        console.log(err)
      }});
    
   }





   open(content: any){
    this.onSubmit();
    this.modalService.open(content, { ariaLabelledBy: 'modale add recipes', size: 'lg', centered: true}).result.then((res) =>{
      //console.log('azione da eseguire')
      this.form.reset();

    }).catch((res) => {
      this.ricettaInserita = '';
      this.router.navigate(['ricette']);
      //console.log('nessuna azione da eseguire')
    });
   }

}
