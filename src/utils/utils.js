export const titleToSrc = (title) => {
  return `img/` + title.replaceAll(` `, `-`).replaceAll(`:`, ``).toLowerCase() + `.jpg`;
};

export const convertScore = (numberScore) => {
  if (numberScore < 3) {
    return `Bad`;
  } else if (numberScore < 5) {
    return `Normal`;
  } else if (numberScore < 8) {
    return `Good`;
  } else if (numberScore < 10) {
    return `Very good`;
  }
  return `Awsome`;
};
