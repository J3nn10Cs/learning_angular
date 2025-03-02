import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [TitleComponent, CommonModule],
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkasSignal().name}`
  )

  public frameworkasSignal = signal({
    name : 'Angular',
    releaseDate: 2025
  })

  public frameworkasProperty = {
    name : 'Angular',
    releaseDate: 2025
  }

  constructor(){
    setTimeout(() => {

      // this.frameworkasProperty.name = 'React'
      this.frameworkasSignal.update(value => ({
        ...value,
        name : 'React'
      }))

      console.log('hecho')
    }, 3000);
  }
}
