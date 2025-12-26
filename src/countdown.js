// //  * Function: countdownTimer
//  * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
//  *
//  * Steps:
//  * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
//  * 2. Use `setInterval` to decrement the time and log the remaining time.
//  * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
//  * 4. Return the timer ID so it can be used for test validation.
//  *
//  * Example Usage:
//  * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
//  */
function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  // let remainingTime = startTime;
  // Set up a timer using setInterval
  // Log the remaining time and decrement it
  // Stop the timer when time reaches 0
  // Return the timer ID for validation
}

module.exports = { countdownTimer };

function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  let remainingTime = startTime;

  // Set up a timer using setInterval
  const timerId = setInterval(() => {
    console.log(`Remaining time: ${remainingTime}`);

    remainingTime--;

    // Stop the timer when time reaches 0
    if (remainingTime < 0) {
      clearInterval(timerId);
      console.log("Countdown finished!");
    }
  }, interval);

  // Return the timer ID for validation
  return timerId;
}

module.exports = { countdownTimer };

function startCountdown(seconds) {
  let remainingTime = seconds;

  const countdownInterval = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);

    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      console.log("⏰ Countdown finished!");
    }
  }, 1000);
}

// Example usage
startCountdown(5);

function countdownTimer(seconds) {
  let remainingTime = seconds;

  const timerId = setInterval(() => {
    console.log(`Remaining time: ${remainingTime}`);

    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(timerId);
      console.log("Countdown complete!");
    }
  }, 1000);

  return timerId; // ✅ Required for test validation
}

const timer = countdownTimer(5);