/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
function delayedReminder(message, delay) {
  // Return a promise
  // Use setTimeout to log the message after the specified delay
  // Resolve the promise once the message is logged9
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, delay);
  });
}

module.exports = { delayedReminder };

function delayedReminder(message, delay) {
  // Return a promise
  return new Promise((resolve) => {
    // Use setTimeout to log the message after the specified delay
    setTimeout(() => {
      console.log(message);

      // Resolve the promise once the message is logged
      resolve();
    }, delay);
  });
}

module.exports = { delayedReminder };

delayedReminder("Time to stretch!", 3000)
  .then(() => console.log("Reminder done."));

 function setReminder(message, delayInSeconds) {
  setTimeout(() => {
    console.log(`🔔 Reminder: ${message}`);
  }, delayInSeconds * 1000);
}

// Example usage
setReminder("Take a short break", 3);

function delayedReminder(message, delayInSeconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`🔔 Reminder: ${message}`);
      resolve("Reminder logged");
    }, delayInSeconds * 1000);
  });
}

delayedReminder("Stand up and stretch", 3)
  .then((result) => {
    console.log(result);
  });

  async function runReminder() {
  const result = await delayedReminder("Drink water", 2);
  console.log(result);
}

runReminder();