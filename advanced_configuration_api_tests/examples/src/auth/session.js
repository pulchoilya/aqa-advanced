// просте in-memory сховище для cookie sid
let sid = null;

export function setSid(value) {
  sid = value;
}

export function getSid() {
  return sid;
}
