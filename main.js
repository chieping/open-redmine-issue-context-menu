/* global chrome: false */
"use strict";

chrome.contextMenus.create({
  title: "open redmine issue by number",
  contexts: ["all"],
  onclick: function(info) {
    let issueNumber = info.selectionText.match(/\d+/) && info.selectionText.match(/\d+/)[0];
    chrome.tabs.create({
      url: "https://10.180.250.64/issues/" + issueNumber
    });
  }
});
