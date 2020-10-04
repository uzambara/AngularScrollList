import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild
} from '@angular/core';
import {CardService} from '../../services/card.service';
import {Card} from '../../models/card';
import {Page} from '../../models/pageable';

@Component({
  selector: 'app-card-list-page',
  templateUrl: './card-list-page.component.html',
  styleUrls: ['./card-list-page.component.scss'],
  providers: [CardService]
})
export class CardListPageComponent {
  public pageableCards: Page<Card>;
  @Input()
  public cards: Card[];

  @ViewChild('cardList') cardList: ElementRef<HTMLUListElement>;

  constructor(private cardService: CardService) {
    this.pageableCards = cardService.getPageable();
    this.cards = this.pageableCards.items;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const triggerAt = 128;

    if (document.body.scrollHeight - (window.innerHeight + window.scrollY) <= triggerAt) {
      this.pageableCards = this.cardService.getPageable({page: this.pageableCards.page + 1});
      this.cards = [...this.cards, ...this.pageableCards.items];
    }
  }
}
