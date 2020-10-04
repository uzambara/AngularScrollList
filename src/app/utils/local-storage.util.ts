export class LocalStorageUtil {
  static getItem<T>(key: string, defaultValue: unknown = null): T | null {
    const result = localStorage.getItem(key);
    if (!result) {
      return defaultValue as T | null;
    }

    return JSON.parse(result);
  }

  static setItem<T>(key: string, item: T): void {
    const signifiedItem = JSON.stringify(item);
    localStorage.setItem(key, signifiedItem);
  }
}
