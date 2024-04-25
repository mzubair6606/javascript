// Simulate fetching data from an API
function fetchDataFromAPI(api) {
  return new Promise((resolve, reject) => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const data = `Data from ${api}`;
      resolve(data);
    }, Math.random() * 1000); // Random delay for simulation

    // Handle errors
    // For simplicity, let's assume there are no errors in this simulation
  });
}

// Simulate processing data
function processData(data) {
  console.log(`Processing data: ${data}`);
  // Simulate processing data
  return `Processed data: ${data.toUpperCase()}`;
}

// Simulate performing an operation
function performOperation(operation) {
  console.log(`Performing operation: ${operation}`);
  // Simulate performing operation
  return `Operation executed: ${operation}`;
}

// Define a list of tasks to be executed
const tasks = [
  { api: "API 1", operation: "Operation 1" },
  { api: "API 2", operation: "Operation 2" },
  { api: "API 3", operation: "Operation 3" },
];

// Define a function to execute tasks concurrently
async function executeTasks(tasks) {
  try {
    // Execute tasks concurrently using Promise.all
    const results = await Promise.all(
      tasks.map(async (task) => {
        // Fetch data from API
        const fetchedData = await fetchDataFromAPI(task.api);
        // Process data
        const processedData = processData(fetchedData);
        // Perform operation
        const operationResult = performOperation(task.operation);
        return [processedData, operationResult];
      })
    );

    // Log results
    results.forEach(([processedData, operationResult]) => {
      console.log(processedData);
      console.log(operationResult);
    });
  } catch (error) {
    console.error("Error during task execution:", error);
  }
}

// Start executing tasks
executeTasks(tasks);
