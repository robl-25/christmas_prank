export function setCookie(id: string, value: string) {
  document.cookie = id + '=' + value;
}

export function getCookie(id: string) {
  let regMatch = document.cookie.match('(^|;)?' + id + '=([^;]*)(;|$)');
  let value = regMatch ? decodeURI(regMatch[2]) : null;

  return value;
}

export function deleteCookie(id: string) {
  document.cookie = id + '=;';
}
