type Operation = 'multiply' | 'add' | 'divide';


export const calculator = (a: number, b: number, op: Operation) : number => {
  console.log('Performing', '<',op,'>', 'on', a, 'and', b)
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':

      if (b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:

      throw new Error('Operation is not multiply, add or divide!');
  }
}

console.log(process.argv);

try {
  console.log(calculator(1, 5 , 'divide'));
  // console.log(calculator(process.argv[3], process.argv[4] , process.argv[2]));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
