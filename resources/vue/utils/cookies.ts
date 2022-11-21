export const setCookie = (name: string, value: any, expired?: any): void => {
  let expires = '';
  if (expired) {
    const date = new Date(expired);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${(value || '') + expires}; path=/`;
};

export const getCookie = (name: string): any => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(`;`).shift();
  }

  return null;
};

export const deleteCookie = (name: any): any => {
  document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
