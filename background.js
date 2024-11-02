// Array of random search topics
const topics = ["space exploration", "quantum mechanics", "AI advancements", "deep-sea creatures", "ancient civilizations"];

// Track the timer
let searchIntervalId = null;

// Get a random topic that hasn't been used recently
async function getRandomSearch() {
  const { pastSearches = [] } = await chrome.storage.local.get("pastSearches");

  // Filter to exclude already-used topics
  const unusedTopics = topics.filter(topic => !pastSearches.includes(topic));
  const topic = unusedTopics.length > 0
    ? unusedTopics[Math.floor(Math.random() * unusedTopics.length)]
    : topics[Math.floor(Math.random() * topics.length)];

  pastSearches.push(topic);
  if (unusedTopics.length <= 1) {
    await chrome.storage.local.set({ pastSearches: [] });
  } else {
    await chrome.storage.local.set({ pastSearches });
  }
  return topic;
}

// Perform the random search
async function performRandomSearch() {
  const query = await getRandomSearch();
  chrome.tabs.create({ url: `https://www.bing.com/search?q=${encodeURIComponent(query)}` });
}

// Start the auto-search with the specified interval in seconds
function startAutoSearch(intervalSeconds) {
  stopAutoSearch(); // Clear any existing interval
  searchIntervalId = setInterval(performRandomSearch, intervalSeconds * 1000);
}

// Stop the auto-search
function stopAutoSearch() {
  if (searchIntervalId !== null) {
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
