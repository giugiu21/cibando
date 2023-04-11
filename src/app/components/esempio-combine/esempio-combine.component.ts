import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, forkJoin, of } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-esempio-combine',
  templateUrl: './esempio-combine.component.html',
  styleUrls: ['./esempio-combine.component.scss']
})
export class EsempioCombineComponent implements OnInit{

  nomi1 = [{name: 'Danilo'}, {name: 'Carlo'}, {name: 'Mario'}];

  nomi2 = [{name: 'Alessia'}, {name: 'Carla'}];

  private primoGruppo$: Observable<any[]>;
  private secondoGruppo$: Observable<any[]>;
  private terzoGruppo$: Observable<string[]>;

  gruppiCombinati$: Observable<any[]>;

  gruppi: any[];

  constructor(){
    this.primoGruppo$ = of(this.nomi1).pipe(
      delay(0),
      tap((valori) => console.log('emesso il primo gruppo: ', valori))
    );

    this.secondoGruppo$ = of(this.nomi2).pipe(
      delay(4000),
      tap((valori) => console.log('emesso il secondo gruppo: ', valori))
    );

    this.terzoGruppo$ = of(['Pino', 'Marco']).pipe(
      delay(1500),
      tap((valori) => console.log('emesso il terzo gruppo: ', valori))
    );

    // this.gruppiCombinati$ = combineLatest(this.primoGruppo$, this.secondoGruppo$, this.terzoGruppo$).pipe(
    //   map(([primaChiamata, secondaChiamata, terzaChiamata])=>{
    //     console.log('prima chiamata: ' + JSON.stringify(primaChiamata));
    //     console.log('seconda chiamata: ' + JSON.stringify(secondaChiamata));
    //     console.log('terza chiamata: ' + JSON.stringify(terzaChiamata));

    //     return [].concat(primaChiamata).concat(secondaChiamata).concat(terzaChiamata);
    //   }),
    //   tap((val) => console.log('valori uniti: ', val))
    // )

      
  }

  ngOnInit(): void {
    this.gruppiCombinati$ = forkJoin(this.primoGruppo$, this.secondoGruppo$, this.terzoGruppo$).pipe(
      map((res) => {
        return this.gruppi = res;
      })
    );
  }

}
