// 查看页面可滚动元素
!(function findScroller(element) {
  // console.log('🚀 ~ findScroller ~ element', element);
  element.onscroll = function () {
    console.log(element);
  };
  if (element.scrollTop > 0) {
    console.log('scrollTop > 0', element);
  }

  Array.from(element.children).forEach(findScroller);
})(document.body);
