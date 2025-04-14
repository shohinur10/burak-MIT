function calculate(expression: string): number {
    return expression
      .split("+")
      .map(num => parseInt(num))
      .reduce((sum, num) => sum + num, 0);
  }
  
  console.log(calculate("1+3"));


  export {}