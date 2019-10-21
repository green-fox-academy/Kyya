export default abstract class Animal {
  protected name: string;

  protected age: number;

  protected gender: string;

  protected hunger: number;

  abstract breed(): string;

  constructor(name: string) {
    this.name = name;
  }

  run(): void {
    console.log(`${this.name} is running.`);
  }

  getName(): string {
    return this.name;
  }
}
