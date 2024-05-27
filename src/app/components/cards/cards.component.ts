import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { CardsService } from 'src/app/services/cards/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit{

  payloadCards:any
  payloadTres:any
  currentItem = 1;
  @Output() isVerBanner = new EventEmitter<boolean>();
  constructor(private serviceCards:CardsService){
  }

  ngOnInit(): void {
    this.serviceCards.getCards('https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards')
      .pipe(take(1))  
      .subscribe((datos) => {
          this.payloadCards = datos
          this.payloadTres = this.payloadCards?.listCard.slice(0, 3)
          console.log('info --->', this.payloadCards)
      });
  }

  verBanner(){
    this.isVerBanner.emit(true);
  }
}
