chrome.action.onClicked.addListener(() => {
  const targetUrl = chrome.runtime.getURL("index.html");

  chrome.tabs.query({}, function(tabs) {
    const existingTab = tabs.find(tab => tab.url === targetUrl);

    if (existingTab) {
      chrome.tabs.update(existingTab.id, { active: true });
    } else {
      chrome.tabs.create({ url: targetUrl });
    }
  });
});
