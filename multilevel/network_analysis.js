// Title: Network Analysis

// Problem:
// You are given a list of employees and their direct supervisors. Each employee is represented by a unique ID, and their supervisor's ID is also provided. Your task is to implement a function to perform network analysis to determine the hierarchy and depth of each employee within the organization.

// Example Input:

// const employees = [
//   { id: 1, supervisorId: null },
//   { id: 2, supervisorId: 1 },
//   { id: 3, supervisorId: 1 },
//   { id: 4, supervisorId: 2 },
//   { id: 5, supervisorId: 2 },
//   { id: 6, supervisorId: 4 },
//   { id: 7, supervisorId: 4 },
//   { id: 8, supervisorId: 5 },
//   { id: 9, supervisorId: 5 },
// ];

// Example Output:

// const hierarchy = {
//   1: { depth: 0, subordinates: [2, 3] },
//   2: { depth: 1, subordinates: [4, 5] },
//   3: { depth: 1, subordinates: [] },
//   4: { depth: 2, subordinates: [6, 7] },
//   5: { depth: 2, subordinates: [8, 9] },
//   6: { depth: 3, subordinates: [] },
//   7: { depth: 3, subordinates: [] },
//   8: { depth: 3, subordinates: [] },
//   9: { depth: 3, subordinates: [] },
// };

// Problem Description:
// Given the employees array, where each element represents an employee with their ID and supervisor's ID, your task is to construct a hierarchical structure (hierarchy) that represents the depth of each employee within the organization and lists their immediate subordinates. The depth of an employee is defined as the number of levels in the organizational hierarchy above them, with the CEO having a depth of 0.

// Concepts Revised or Learned:

//     Data Structures: Working with arrays and objects to represent hierarchical structures.
//     Tree Traversal: Implementing algorithms to traverse and analyze hierarchical data.
//     Recursion: Utilizing recursive functions to traverse the organizational hierarchy.
//     Problem-Solving: Breaking down a complex problem into smaller, manageable parts and implementing a solution using programming concepts.
