export const isType = (data, type) => Object.prototype.toString.call(data) === `[object ${type.toUpperCase()}]`;
