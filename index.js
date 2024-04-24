// Generator function to fetch data from multiple URLs
function* fetchData(urls) {
  for (const url of urls) {
    try {
      const response = yield fetch(url); // Pause execution until fetch operation completes
      const data = yield response.json(); // Pause execution until JSON parsing completes
      console.log(`Data fetched from ${url}:`, data);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  }
}

// Example usage: Fetch data from multiple URLs
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Create iterator from generator function
const iterator = fetchData(urls);

// Define a function to recursively iterate over the generator
function iterate(iterator, iteration) {
  if (iteration.done) {
    console.log("All iterations completed");
    return;
  }

  const promise = iteration.value; // Value returned by the yield statement (a Promise)

  // Process the Promise returned by the yield statement
  promise
    .then((data) => iterator.next(data)) // Pass the resolved data to the generator and continue iteration
    .catch((error) => iterator.throw(error)); // Pass any errors to the generator and continue iteration
}

// Start iterating over the generator
iterate(iterator, iterator.next());
