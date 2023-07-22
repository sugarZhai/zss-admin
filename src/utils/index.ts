//随机生成自然数
export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
