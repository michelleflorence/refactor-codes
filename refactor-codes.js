async function refactorCode() {
  try {
    await operation1();
    await operation2();
    await operation3();
    await operation4();
  } catch (error) {
    // Handle the error based on the specific operation that failed
    if (error.message === "OPERATION4FAILED") {
      // Handle Operation4 failure
    } else if (error.message === "OPERATION3FAILED") {
      // Handle Operation3 failure
    } else if (error.message === "OPERATION2FAILED") {
      // Handle Operation2 failure
    } else if (error.message === "OPERATION1FAILED") {
      // Handle Operation1 failure
    } else {
      // Handle other types of errors
    }
  }
}

async function operation1() {
  // Perform Operation1
  // If Operation1 fails, throw an error
  throw new Error("OPERATION1FAILED");
}

async function operation2() {
  // Perform Operation2
  // If Operation2 fails, throw an error
  throw new Error("OPERATION2FAILED");
}

async function operation3() {
  // Perform Operation3
  // If Operation3 fails, throw an error
  throw new Error("OPERATION3FAILED");
}

async function operation4() {
  // Perform Operation4
  // If Operation4 fails, throw an error
  throw new Error("OPERATION4FAILED");
}

// Call the main function
refactorCode();
