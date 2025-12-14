const Session = {
  save(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  load(key) {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  remove(key) {
    sessionStorage.removeItem(key);
  },

  clear() {
    sessionStorage.clear();
  }
};
Session.save('lastPage', window.location.pathname);