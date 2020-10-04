import {Card} from '../models/card';
import {newGuid} from './guid.util';

export class CardFactory {
  static Create({title = '', description = ''}: Partial<Card>): Card {
    return {
      id: newGuid(),
      title,
      description,
      isFavorite: false,
    };
  }
}
