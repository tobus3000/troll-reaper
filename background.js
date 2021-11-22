
chrome.tabs.onUpdated.addListener(async () => {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    chrome.scripting.executeScript({
        target: {tabId: tab.id, allFrames: true},
        files: ['remove_comment.js']
    });
});