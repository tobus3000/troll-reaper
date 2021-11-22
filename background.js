chrome.tabs.onUpdated.addListener(tab => function(details) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        file: 'remove_comment.js'
    });
});