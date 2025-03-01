import { booleanAttribute, Component, Input, signal } from '@angular/core';

@Component({
  selector : 'app-title',
  imports: [],
  styles: ``,
  template: `
    <h1 class="text-center text-3xl font-extrabold">{{title}} - {{withShadow}} </h1>
  `
})
export class TitleComponent {
  @Input({required : true}) title! : string 
  @Input({transform : booleanAttribute}) withShadow : boolean = false 
}
