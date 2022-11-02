// 桌面通知
const info = ({ type, title, message }) => {
  chrome.notifications.create(null, {
    type: 'basic',
    iconUrl: NOTICE_IMAGE_TYPE[type],
    title,
    message,
  });
};

// 获取浏览器正在打开的标签页
const getCurrentTabs = (options = {}) => {
  return new Promise(resolve => {
    chrome.tabs.query(options, tabs => resolve(tabs));
  });
};

// 发送消息给标签页
const sendMessageToTargetTab = ({ tabId, body }) => {
  return new Promise(resolve => {
    chrome.tabs.sendMessage(tabId, body, response => resolve(response));
  });
};

export default {
  sendMessageToBackground,
  getCurrentTabs,
  sendMessageToTargetTab,
};
