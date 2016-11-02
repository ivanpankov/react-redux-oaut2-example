export default class Auth {
  constructor(tokenName) {
    this.tokenName = tokenName;
  }

  setToken(token) {
    localStorage.setItem(this.tokenName, token);
  }

  removeToken() {
    localStorage.removeItem(this.tokenName);
  }

  getToken() {
    return localStorage.getToken(this.tokenName);
  }

  isAuthenticated() {
    return !!this.getToken();
  }
};
