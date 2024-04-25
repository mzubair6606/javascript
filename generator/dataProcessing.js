// Simulate fetching data from a source
function fetchData(source) {
  return new Promise((resolve, reject) => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const data = `Data from ${source}`;
      resolve(data);
    }, 1000); // Random delay for simulation
  });
}

// Simulate applying a transformation to the data
function* applyTransformation(data) {
  console.log(`Applying transformation to data: ${data}`);

  // Simulate applying transformation
  yield `Transformed data: ${data.toUpperCase()}`;
}

// Simulate performing analysis on the transformed data
function* performAnalysis(transformedData) {
  console.log(`Performing analysis on transformed data: ${transformedData}`);

  // Simulate performing analysis
  yield `Analysis result: Length of transformed data is ${transformedData.length}`;
}

// Define the data processing pipeline
async function* dataProcessingPipeline(sources) {
  for (const source of sources) {
    // Fetch data from source and wait for the promise to resolve
    const data = await fetchData(source);

    console.log("data => ", data);

    // // Apply transformation to data
    const transformedData = yield* applyTransformation(data);

    console.log("transformedData => ", transformedData);

    // // Perform analysis on transformed data
    // yield* performAnalysis(transformedData);
  }
}

// Define data sources
const sources = ["Source A", "Source B", "Source C"];

// Create iterator from the data processing pipeline generator function
const iterator = dataProcessingPipeline(sources);

// Define a function to recursively iterate over the generator
function iterate(iterator, iteration) {
  try {
    if (iteration.done) {
      console.log("Data processing pipeline completed");
      return;
    }

    const step = iteration.value; // Value returned by the yield statement
    console.log("step", step);

    // Start iterating over the generator again to proceed to the next step
    iterate(iterator, iterator.next());
  } catch (error) {
    console.error("Unexpected error during data processing:", error);
  }
}

// Start the data processing pipeline
iterate(iterator, iterator.next());
