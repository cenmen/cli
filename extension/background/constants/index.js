// 桌面通知图标类型
export const NOTICE_IMAGE_TYPE = {
  success: '/assets/images/success.png',
  info: '/assets/images/info.png',
  warning: '/assets/images/warning.png',
  error: '/assets/images/error.png',
};

// 与 content-script 通信的事件类型
export const EVENT_TYPE = {
  INFO: 'info', // 桌面通知
  REGISTER: 'register', // content-script 注册
  BROADCAST: 'broadcast', // content-script 广播给其他注册的 content-script
};