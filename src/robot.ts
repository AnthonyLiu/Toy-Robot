export interface ITableSize {
  x: number;
  y: number;
}
export interface IPosition {
  x: number;
  y: number;
}

export type Direction = 'EAST' | 'NORTH' | 'WEST' | 'SOUTH';

export enum Directions { 'EAST', 'NORTH', 'WEST', 'SOUTH' }

export class Robot {
  private tableSize: ITableSize;
  private direction: Directions | null;
  private position: IPosition | null;

  constructor(tableSize: ITableSize = {x: 5, y: 5}) {
    this.tableSize = tableSize;
    this.position = null;
    this.direction = null;
  }

  public place(inputArgs: string): boolean {
    const [posXStr, posYStr, direction] = inputArgs.split(',');
    const [posX, posY] = [posXStr, posYStr].map(Number);

    // act place only if all args are valid
    if (
      posX > 0 && posX <= this.tableSize.x &&
      posY > 0 && posY <= this.tableSize.y &&
      Directions[direction as Direction] !== undefined
    ) {
      this.position = {x: posX, y: posY};
      this.direction = Directions[direction as Direction] as number;
      return true;
    }

    console.log('Invalid parameters');
    return false;
  }

  public left(): boolean {
    if (this.isInitialized()) {
      // calculate the new direction based on the Direction enum
      this.direction = this.direction === Directions.EAST ? Directions.SOUTH: this.direction! - 1;
      return true;
    }
    return false;
  }

  public right(): boolean {
    if (this.isInitialized()) {
      this.direction = this.direction === Directions.SOUTH ? Directions.EAST : this.direction! + 1;
      return true;
    }
    return false;
  }

  public move(): boolean {
    console.log(`Do move action`);
    return true;
  }

  public report(): boolean {
    if (this.isInitialized()) {
      // print tableTop in cli
      for (let y = this.tableSize.y; y >0; y--) {
        for (let x = 1; x <= this.tableSize.x; x++) {
          if (x === this.position!.x && y === this.position!.y) {
            process.stdout.write(`[${Directions[this.direction!][0]}]`);
          } else {
            process.stdout.write('[ ]');
          }
        }
        console.log();
      }
      return true;
    }

    return false;
  }

  public getStatus(): string {
    return (`${this.position?.x}, ${this.position?.y}, ${Directions[this.direction!]}`)
  }

  private isInitialized(): boolean {
    return this.position !== null && this.direction !== null;
  }
}
