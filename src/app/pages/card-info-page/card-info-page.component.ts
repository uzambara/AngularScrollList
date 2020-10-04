import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CardService} from '../../services/card.service';
import {Card} from '../../models/card';

@Component({
  selector: 'app-card-info-page',
  templateUrl: './card-info-page.component.html',
  styleUrls: ['./card-info-page.component.scss'],
  providers: [CardService],
})
export class CardInfoPageComponent implements OnInit {
  public card: Card;

  constructor(private activateRoute: ActivatedRoute, private cardService: CardService, private router: Router) {
    const cardId = activateRoute.snapshot.params.id;
    this.card = cardService.getOne(cardId);
  }

  ngOnInit(): void {
  }

  public onSaveButtonClick(card: Card): void {
    this.cardService.update(card);
    this.router.navigate(['/']);
  }

  public onDeleteButtonClick(card: Card): void {
    this.cardService.delete(card.id);
    this.router.navigate(['/']);
  }
}
