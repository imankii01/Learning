// Get references to UI elements
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const intervalInput = document.getElementById("interval");
const status = document.getElementById("status");

// Start the automatic search with the specified interval (in seconds)
startButton.addEventListener("click", () => {
  const interval = parseInt(intervalInput.value);
  
  if (isNaN(interval) || interval <= 0) {
    status.textContent = "Please enter a valid interval in seconds.";
    return;
  }

  chrome.runtime.sendMessage({ action: "start", interval }, (response) => {
    if (response && response.status === "started") {
      status.textContent = `Auto-search started with an interval of ${interval} seconds.`;
    } else {
      status.textContent = "Failed to start auto-search.";
    }
  });
});

// Stop the automatic search
stopButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stop" }, (response) => {
    if (response && response.status === "stopped") {
      status.textContent = "Auto-search stopped.";
    } else {
      status.textContent = "Failed to stop auto-search.";
    }
  });
});
