const sendMessageToBackground = body => {
  return new Promise(resolve => {
    chrome.runtime.sendMessage(body, response => {
      resolve(response);
    });
  });
};

export default {
  sendMessageToBackground,
};
