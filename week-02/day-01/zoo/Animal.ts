export default abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected hunger: number;

  constructor(name: string) {
    this.name = name;
  }
  abstract breed(): string;

  getName(): string {
    return this.name;
  }
}
