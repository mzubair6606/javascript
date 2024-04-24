// Define a function to simulate exploring a room
function* exploreRoom(room) {
  console.log(`Entering ${room.name}...`);

  // Simulate exploring the room
  yield `You enter ${room.name}.`;

  // Check if the room contains treasure
  if (room.treasure) {
    yield `You found a ${room.treasure}!`;
  }

  // Check if the room contains a monster
  if (room.monster) {
    yield `A ${room.monster} appears! Prepare for battle!`;
  }

  // Check if the room contains a trap
  if (room.trap) {
    yield `You triggered a ${room.trap} trap!`;
  }

  // Simulate leaving the room
  yield `Leaving ${room.name}...`;
}

// Define the dungeon layout
const dungeon = [
  { name: "Entrance Hall", treasure: "diamond" },
  { name: "Dark Corridor", monster: "goblin" },
  { name: "Treasure Room", treasure: "gold coin" },
  { name: "Trap Room", trap: "spike" },
];

// Define a function to explore the dungeon
function* exploreDungeon(dungeon) {
  for (const room of dungeon) {
    yield* exploreRoom(room);
  }
}

// Create iterator from generator function
const iterator = exploreDungeon(dungeon);

// Define a function to recursively iterate over the generator
function iterate(iterator, iteration) {
  try {
    if (iteration.done) {
      console.log("You have explored the entire dungeon!");
      return;
    }

    const message = iteration.value; // Value returned by the yield statement
    console.log(message);

    // Start iterating over the generator again to recursively explore the dungeon
    iterate(iterator, iterator.next());
  } catch (error) {
    console.error("Unexpected error during exploration:", error);
  }
}

// Start exploring the dungeon
iterate(iterator, iterator.next());
