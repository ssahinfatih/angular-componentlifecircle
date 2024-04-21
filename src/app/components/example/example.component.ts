import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  template:`
    example <br>
    <input type="text" [(ngModel)]="data"><br>

`
})
export class ExampleComponent implements OnChanges,OnInit, DoCheck,OnDestroy{

  

  @Input() data:string;
  // ngOnChanges - selector ile çağırılıp herhangi bir değer verildiğinde çağırılır.
  ngOnChanges(changes: SimpleChanges): void {
    console.log(" 1  -  ngOnChanges")
  }
  // ngOnInit componenet oluşturulunca çalışır.
  ngOnInit(): void {
    console.log(" 2  -  ngOnInit")
  }
  
  // componente olan her değişiklik için çalışır.
  ngDoCheck(): void {
    console.log(" 3  -  ngDoCheck")
  }
  // componentin kaldırılması silinmesi durumunda tetiklenir 
  ngOnDestroy(): void {
    console.log(" 3 -  ngOnDestroy")
  }
}
