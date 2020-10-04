export type Pageable = {
  size: number,
  page: number,
};

export type Page<T> = {
  items: T[],
  hasMore: boolean,
  totalCount: number,
} & Pageable;
