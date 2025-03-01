import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';


type Grade = 'A' | 'B' | 'C'

@Component({
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular','Vue','Svelte','Qwik'])
  public frameworks2 = signal([])

  //metodo para cambiar de señal
  public toggleContent() {
    //cambia el valor del value
    this.showContent.update(value => !value)
  }
}
