export interface ITableSize {
  x: number;
  y: number;
}
export interface IPosition {
  x: number;
  y: number;
}

export const enum Directions { 'EAST', 'NORTH', 'WEST', 'SOUTH' }

export class Robot {
  public tableSize: ITableSize;
  public direction: Directions | null;
  private position: IPosition | null;

  constructor(tableSize: ITableSize = {x: 5, y: 5}) {
    this.tableSize = tableSize;
    this.position = null;
    this.direction = null;
  }

  public place(inputArgs: string): any {
  }

  public left(): any {
  }

  public right(): any {
  }

  public move(): boolean {
    console.log(`Do move action`);
    return true;
  }

  public report(): boolean {
    console.log(`Do report action`)
    return true;
  }
}
