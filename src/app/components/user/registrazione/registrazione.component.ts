import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './customValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent{

  // name: string;
  // email: string;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required), 
    accetto: new FormControl('', Validators.requiredTrue),
  },
  [CustomValidator.MatchValidator('password', 'ripetiPassword')]
  );

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal,
  ){}


  onSubmit(){
    // console.log(this.form.value);
    const user = {
     name: this.form.value.name,
     email: this.form.value.email
    }
    this.userService.datiUtente.next(user);
    this.router.navigate(['home']);
   }

   open(content: any, titolo?: string){
    let title = titolo;

    this.modalService.open(content, { ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) =>{
      console.log('azione da eseguire')
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
    });
   }

}
