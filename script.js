//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not <${arg}>`);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of expression');
    this.name = this.constructor.name;
  }
}