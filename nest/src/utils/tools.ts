export const isType = (data, type) => Object.prototype.toString.call(data) === `[object ${type.toUpperCase()}]`;

export const delay = (delayTime) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), delayTime);
  });
};
