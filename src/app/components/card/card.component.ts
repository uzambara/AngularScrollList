import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../models/card';
import {Router} from '@angular/router';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit(): void {
  }

  onEditClick(): void {
    this.router.navigate([`/info/${this.card.id}`]);
  }

  onFavoriteChanged(): void {
    this.card.isFavorite = !this.card.isFavorite;
    this.cardService.update(this.card);
  }
}
