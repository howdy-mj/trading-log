export function setCookie(
  cookieName: string,
  cookieValue: string,
  expireDays: number = 7,
) {
  const today = new Date();
  const EXPIRE_DAYS_MILLISECONDS = expireDays * 24 * 60 * 60 * 1000;
  today.setTime(today.getTime() + EXPIRE_DAYS_MILLISECONDS);
  let expires = 'expires=' + today.toUTCString();
  document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
}

export function getCookie(cookieName: string) {
  let name = cookieName + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function checkCookie(cookieName: string) {
  let user = getCookie(cookieName);
  if (user != '') {
    alert('Welcome again ' + user);
  } else {
    // user = prompt('Please enter your name:', '');
    if (user != '' && user != null) {
      setCookie(cookieName, user, 365);
    }
  }
}
