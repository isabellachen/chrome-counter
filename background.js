// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

// chrome.alarms.onAlarm.addListener(function() {
//   chrome.browserAction.setBadgeText({text: ''});
//   chrome.notifications.create({
//       type:     'basic',
//       iconUrl:  'drink_water.png',
//       title:    'Time to Hydrate',
//       message:  'Everyday I\'m Guzzlin\'!',
//       buttons: [
//         {title: 'Keep it Flowing.'}
//       ],
//       priority: 0});
// });
//
// chrome.notifications.onButtonClicked.addListener(function() {
//   chrome.storage.sync.get(['minutes'], function(item) {
//     chrome.browserAction.setBadgeText({text: 'ON'});
//     chrome.alarms.create({delayInMinutes: item.minutes});
//   });
// });

// setTimeout(()=>{
  chrome.storage.sync.get(['count'], (item) => {
    console.log('item', item)
    console.log(item.count)
  })
// }, 50);

chrome.storage.onChanged.addListener((changes) => {
  // let storageChange = changes.count.newValue;
  // count = storageChange;
  console.log(changes)
})

// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     console.log(sender.tab? "from content script" + sender.tab.url : "from the ext");
//     console.log(request);
//   }
// );
