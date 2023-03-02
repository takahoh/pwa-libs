export class Test {
    name: string
    constructor(name: string) {
      this.name = name
    }
    action():string {
      return `Hello ${this.name}`
    }
  }