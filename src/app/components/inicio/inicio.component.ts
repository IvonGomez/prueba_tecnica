import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  photo ='./assets/img/fondo.png'
  isVerBanner:boolean=false

  verBanner(event:any){
    this.isVerBanner = event
  }

  home(){
    console.log('ir atras')
  }

}
