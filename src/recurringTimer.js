/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `interval` (in milliseconds).
 * 2. Use `setInterval` to repeatedly log the message at the specified interval.
 * 3. Return the timer ID so it can be used for stopping the timer.
 *
 * Example Usage:
 * const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds.
 */

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 *
 * Steps:
 * 1. Accept the timer ID as a parameter.
 * 2. Use `clearInterval` to stop the recurring timer.
 *
 * Example Usage:
 * stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID.
 */
function recurringTimer(message, interval) {
  // Set up a timer using setInterval to log the message
  // Return the timer ID
}

function stopRecurringTimer(timerId) {
  // Stop the timer using clearInterval
}

module.exports = { recurringTimer, stopRecurringTimer };

function recurringTimer(message, interval) {
  // Set up a timer using setInterval to log the message
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  // Return the timer ID
  return timerId;
}

function stopRecurringTimer(timerId) {
  // Stop the timer using clearInterval
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };

// const timerId = recurringTimer("Hello, world!", 2000);

// Stop after 6 seconds
setTimeout(() => {
  stopRecurringTimer(timerId);
  console.log("Timer stopped.");
}, 6000);

function startRecurringTask() {
  const intervalId = setInterval(() => {
    console.log("🔄 Checking tasks...");
  }, 2000);

  // Stop after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("🛑 Recurring task stopped.");
  }, 10000);
}

// Example usage
startRecurringTask();

function startRecurringTimer(message, intervalInSeconds) {
  const timerId = setInterval(() => {
    console.log(message);
  }, intervalInSeconds * 1000);

  return timerId; // ✅ Allows external control
}

const timerId = startRecurringTimer("🔄 Syncing data...", 2);

// Stop the timer after 8 seconds
setTimeout(() => {
  clearInterval(timerId);
  console.log("🛑 Timer stopped.");
}, 8000);