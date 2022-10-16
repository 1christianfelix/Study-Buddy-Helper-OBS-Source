window.addEventListener("beforeunload", (event) => {
  event.returnValue = true;
});

//  Timer Settings
let pomodoro_minutes = 0.1;
let reset = pomodoro_minutes * 60;
let pomodoro_countdown_in_seconds = reset;
let pomodoro_timer = setInterval(updateCountdown, 1000);

//  Stats Settings
let session_hours = 0;
let total_hours = 0;
total_hours = parseInt(
  prompt("Welcome, back enter total hours completed from last time")
);
session_hours = parseInt(prompt("What session are you on?"));
document.querySelector(".total-hours").textContent = total_hours;
document.querySelector(".session-hours").textContent = session_hours;

// Reset timer Button
document.querySelector(".btn-reset").addEventListener("click", function () {
  clearInterval(pomodoro_timer);
  pomodoro_countdown_in_seconds = reset;
  pomodoro_timer = setInterval(updateCountdown, 1000);
});

// Increase hours manually button
document.querySelector(".btn-inc").addEventListener("click", function () {
  total_hours += 1;
  session_hours += 1;
  document.querySelector(".total-hours").textContent = total_hours;
  document.querySelector(".session-hours").textContent = session_hours;
});

function increaseHours() {
  session_hours += 1;
  total_hours += 1;
  document.querySelector(".session-hours").textContent = session_hours;
  document.querySelector(".total-hours").textContent = total_hours;
  alert("🤗 Session Complete! 🥳\nPress OK when you're ready to continue...");
}

function updateCountdown() {
  console.log(pomodoro_countdown_in_seconds);
  pomodoro_countdown_in_seconds -= 1;
  if (pomodoro_countdown_in_seconds == 1) {
    var audio = new Audio(
      "https://cdn.freesound.org/previews/352/352666_4019029-lq.mp3"
    );
    audio.volume = 0.25;
    audio.play();
  }
  if (pomodoro_countdown_in_seconds == 0) {
    increaseHours();
    pomodoro_countdown_in_seconds = reset;
  }
}

// TODO:
// Grid layout
// Button Setup
// Pomodoro Alert System
//
