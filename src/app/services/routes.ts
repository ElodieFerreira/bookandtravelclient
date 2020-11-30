const base = 'http://localhost:8080/';
export const Routes = {
  bien: {
    base: base + 'bien/',
    search: base + 'bien/research/',
    allUser: base + 'bien/all/'
  },
  user: {
    base: base + 'user/',
    register: base + 'user/',
    login: base + 'user/login/',
  },
  picture: {
    base: base + 'photo/',
  },
  reservation: {
    base: base + 'reservation/'
  }
};
