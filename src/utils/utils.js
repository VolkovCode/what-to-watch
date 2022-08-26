export const titleToSrc = (title) => {
  return `img/` + title.replaceAll(` `, `-`).replaceAll(`:`, ``).toLowerCase() + `.jpg`;
};

// export const convertScore = (numberScore) => {
//   return textScore
// };
