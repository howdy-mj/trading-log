export const getItem = (name: string) => {
  return sessionStorage.getItem(name);
};

export const setItem = (name: string, value: string) => {
  sessionStorage.setItem(name, value);
};

export const removeItem = (name: string) => {
  sessionStorage.removeItem(name);
};

export const clearAllToken = () => {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('refresh_token');
};
