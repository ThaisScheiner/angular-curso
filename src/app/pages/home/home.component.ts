import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements DoCheck{
 
  /*
    implementa o metodo destruir do appComponent.ts
    
    ngOnDestroy(): void {
    console.log('destruiu');
  }

   */

  num: number = 1;

  ngDoCheck(){
    console.log('DoCheck = Detecta qualquer tipo de mudança no componente');
  }
  
  adiciona1(){
    this.num++;
  }

}
