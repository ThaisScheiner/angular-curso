import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
  user: User | undefined;
  constructor(private userService: UserService){
    this.user = userService.getUser();
  }

  
  /*
    implementa o metodo destruir do appComponent.ts
    
    ngOnDestroy(): void {
    console.log('destruiu');
  }

   num: number = 1;

  ngDoCheck(){
    console.log('DoCheck = Detecta qualquer tipo de mudança no componente');
  }
  
  adiciona1(){
    this.num++;
  }

   */

 

}
