import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [CommonModule, TitleComponent],
  styles: ``,
  template: `
    <app-title title="View Transition"/>
    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" 
        alt="hola.png"
        width="200"
        height="300"
        style="view-transition-name: hero-1"
      >

      <div 
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero-2"
      >

      </div>
    </section>
  `
})
export default class ViewTransitionComponent {

}
