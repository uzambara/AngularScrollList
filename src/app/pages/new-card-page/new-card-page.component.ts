import { Component, OnInit } from '@angular/core';
import {Card} from '../../models/card';
import {CardFactory} from '../../utils/card-factory';
import {CardService} from '../../services/card.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-card-page',
  templateUrl: './new-card-page.component.html',
  styleUrls: ['./new-card-page.component.scss'],
  providers: [CardService]
})
export class NewCardPageComponent implements OnInit {
  public card: Card;

  constructor(private cardService: CardService, private router: Router) {
    this.card = CardFactory.Create({});
  }

  ngOnInit(): void {
  }

  public onSaveButtonClick(card: Card): void {
    this.cardService.add(card);
    this.router.navigate(['/']);
  }
}
