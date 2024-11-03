// Array of random search topics
const topics = ["space exploration", "quantum mechanics", "AI advancements", "deep-sea creatures", "ancient civilizations"];

// Track the interval ID for clearing the interval later
let searchIntervalId = null;

// Function to get a random topic
function getRandomTopic() {
  return topics[Math.floor(Math.random() * topics.length)];
}

// Function to perform a random search
function performRandomSearch() {
  const query = getRandomTopic();
  chrome.tabs.create({ url: `https://www.bing.com/search?q=${encodeURIComponent(query)}` });
}

// Function to start auto-search with specified interval (in seconds)
function startAutoSearch(intervalSeconds) {
  // Clear any existing interval before starting a new one
  if (searchIntervalId) clearInterval(searchIntervalId);

  // Start a new interval
  searchIntervalId = setInterval(performRandomSearch, intervalSeconds * 1000);
}

// Function to stop the auto-search
function stopAutoSearch() {
  if (searchIntervalId) {
    clearInterval(searchIntervalId);
    searchIntervalId = null;
  }
}

// Listen for messages from popup.js to control start/stop
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "start") {
    startAutoSearch(request.interval);
    sendResponse({ status: "started" });
  } else if (request.action === "stop") {
    stopAutoSearch();
    sendResponse({ status: "stopped" });
  }
});
