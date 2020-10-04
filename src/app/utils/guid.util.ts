export function newGuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {

    // tslint:disable-next-line:no-bitwise
    const r: number = Math.random() * 16 | 0;
    // tslint:disable-next-line:no-bitwise
    const v: number = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
