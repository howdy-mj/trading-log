export const getItem = (name: string) => {
  return sessionStorage.getItem(name);
};

export const setItem = (name: string, value: string) => {
  sessionStorage.setItem(name, value);
};
