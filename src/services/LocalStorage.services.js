export const LocalStorage = {
  set (key, value) {
    return window.localStorage.setItem(key, value)
  },
  get (key) {
    return window.localStorage.getItem(key)
  }
}