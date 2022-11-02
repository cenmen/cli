import Toastify from 'toastify';

const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

const toast = message => {
  Toastify({
    text: message,
    duration: 3000,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: '#646464',
    },
  }).showToast();
};

// 滚动 window
const scrollToTarget = (target, offsetTop = -200) => {
  const top = $(target).offset().top + offsetTop;
  window.scrollTo({
    top,
    left: 0,
    behavior: 'smooth',
  });
};

// 根据列表长度返回随机下标
const randomSelection = (list, limit = 5) => {
  const randomList = [];
  if (list.length <= limit) {
    return new Array(list.length).fill('').map((val, index) => index);
  }
  while (randomList.length < limit) {
    const num = Math.floor(Math.random() * list.length);
    if (!randomList.includes(num)) randomList.push(num);
  }
  return randomList;
};

// 往页面插入一块操作空间
const createTargetInPage = events => {
  const container = $(`<div class='extension-container'></div>`);
  for (const item of events) {
    const { event, name } = item;
    const startButton = $(`<button class='start'>${name}</button>`);
    startButton.on('click', event);
    container.append(startButton);
  }
  $('body').append(container);
};

export default {
  delay,
  toast,
  scrollToTarget,
  randomSelection,
  createTargetInPage,
};
