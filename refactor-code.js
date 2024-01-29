async function mainFunction() {
  let error = "S_OK";

  try {
    if ((await operation1()) !== "S_OK") {
      error = "OPERATION1FAILED";
    } else if ((await operation2()) !== "S_OK") {
      error = "OPERATION2FAILED";
    } else if ((await operation3()) !== "S_OK") {
      error = "OPERATION3FAILED";
    } else if ((await operation4()) !== "S_OK") {
      error = "OPERATION4FAILED";
    }
  } catch (e) {
    // Handle unexpected errors
    console.error("Unexpected error:", e);
    error = "UNEXPECTEDERROR";
  }

  return error;
}

async function operation1() {
  // Perform Operation1
  // If Operation1 fails, return error code
  return Math.random() > 0.5 ? "S_OK" : "OPERATION1FAILED";
}

async function operation2() {
  // Perform Operation2
  // If Operation2 fails, return error code
  return Math.random() > 0.5 ? "S_OK" : "OPERATION2FAILED";
}

async function operation3() {
  // Perform Operation3
  // If Operation3 fails, return error code
  return Math.random() > 0.5 ? "S_OK" : "OPERATION3FAILED";
}

async function operation4() {
  // Perform Operation4
  // If Operation4 fails, return error code
  return Math.random() > 0.5 ? "S_OK" : "OPERATION4FAILED";
}

// Call the main function
mainFunction().then((result) => {
  console.log("Result:", result);
});
