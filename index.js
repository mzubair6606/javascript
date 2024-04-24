// require("./generator/example1");

function delayedPromise(delayMs, responseData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(responseData), // Simulate response.json()
      });
    }, delayMs);
  });
}

// Example usage:
const responseData = { message: "Hello, world!" };
const delayMs = 100;

// Generator function to fetch data from multiple URLs
function* fetchData(urls) {
  for (const url of urls) {
    try {
      console.log(`Fetching data from ${url}`);
      yield fetch(url); // Pause execution until fetch operation completes

      const promise = delayedPromise(delayMs, responseData);
      yield promise;

      const responseData1 = { message: "Hello, Pakistan!" };
      const delayMs1 = 100;
      const promise1 = delayedPromise(delayMs1, responseData1);
      yield promise1;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error.message);
      // If there's an error, continue to the next iteration
      continue;
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
  try {
    if (iteration.done) {
      console.log("All iterations completed");
      return;
    }

    const promise = iteration.value; // Value returned by the yield statement (a Promise)

    // Process the Promise returned by the yield statement
    promise
      .then((response) => {
        return response.json(); // Parse JSON data from response
      })
      .then((data) => {
        console.log("Resuming iteration with Parsed data:", data);
        // iterator.next(data); // Pass the parsed data to the generator and continue iteration
        // Start iterating over the generator again to recursively
        iterate(iterator, iterator.next());
      })
      .catch((error) => {
        console.error("Error caught during iteration:", error);
        iterator.throw(error); // Pass any errors to the generator and continue iteration
      });
  } catch (error) {
    console.error("Unexpected error during iteration:", error);
  }
}

// Start iterating over the generator
iterate(iterator, iterator.next());
