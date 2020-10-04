import { Injectable } from '@angular/core';
import {Card} from '../models/card';
import {LocalStorageUtil} from '../utils/local-storage.util';
import {Page, Pageable} from '../models/pageable';
import {convertItemsToPageable} from '../utils/pageable.util';

const PAGE_SIZE = 9;

@Injectable()
export class CardService {
  private  cardsLocalStorageKey = 'cards';

  private getAll(): Card[] {
    return LocalStorageUtil.getItem(this.cardsLocalStorageKey, []);
  }

  public getPageable({page = 0, size = PAGE_SIZE}: Partial<Pageable> = { page: 0, size: PAGE_SIZE }): Page<Card> {
    const result: Card[] = LocalStorageUtil.getItem(this.cardsLocalStorageKey, []);
    return convertItemsToPageable(result, {page, size});
  }

  public getOne(id: string): Card | null {
    return this.getAll().find(item => item.id === id);
  }

  public add(card: Card): void {
    const cardItems = [...this.getAll(), card];

    LocalStorageUtil.setItem(this.cardsLocalStorageKey, cardItems);
  }

  public delete(id: string): void {
    const cardItems = this.getAll().filter(card => card.id !== id);

    LocalStorageUtil.setItem(this.cardsLocalStorageKey, cardItems);
  }

  public update(card: Card): void {
    const cards = this.getAll().map(existsCard => existsCard.id === card.id ? card : existsCard);
    LocalStorageUtil.setItem(this.cardsLocalStorageKey, cards);
  }
}
