var blockNetworkRequest = function(details) {
    for (var i = 0; i < details.requestHeaders.length; i++) {
        if (details.requestHeaders[i].value.indexOf("/browse") !== -1) {
            return { cancel: true };
        }
    }
};

chrome.webRequest.onBeforeSendHeaders.addListener(blockNetworkRequest, { urls: ["*://*.nflxvideo.net/*"] }, ["blocking", "requestHeaders"]);
