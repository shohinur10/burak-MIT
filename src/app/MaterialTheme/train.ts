function calculate(expression: string): number {
    const numbers = expression.split('+').map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
 
  console.log(calculate("1+3")); 