// Define an immediately invoked function expression (IIFE)
(function () {
  // Generator function to generate Fibonacci sequence
  function* fibonacciGenerator() {
    let prev = 0;
    let curr = 1;
    // console.log("values => ", { prev, curr });
    while (true) {
      //   console.log({ prev, curr });
      yield curr;

      //   console.log({ prev, curr });
      [prev, curr] = [curr, prev + curr];
    }
  }

  // Create an instance of the Fibonacci generator
  const fibonacci = fibonacciGenerator();

  // Iterate over the Fibonacci sequence and log the values
  for (let i = 0; i < 10; i++) {
    // console.log(fibonacci.next().value); //1
  }
})();
