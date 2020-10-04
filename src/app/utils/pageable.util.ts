import {Page, Pageable} from '../models/pageable';

export function convertItemsToPageable<T>(items: T[], {size, page}: Pageable): Page<T> {
  const startIndex = page * size;
  const resultItems = items.slice(startIndex, startIndex + size);

  return {
    items: resultItems,
    page,
    size,
    hasMore: items.length > startIndex + resultItems.length,
    totalCount: items.length,
  };
}
