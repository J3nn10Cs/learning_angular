import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template : `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `
})
export class HeavyLoadersSlowComponent {

  @Input({required : true}) cssClass! : string

  constructor(){
    const start = Date.now();
    while(Date.now() - start < 300){}

    console.log('Cargado')
  }
}
