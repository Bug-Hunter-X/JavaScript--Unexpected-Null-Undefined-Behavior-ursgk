function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will not work if either a or b is undefined
  }
  // ... rest of the function
}