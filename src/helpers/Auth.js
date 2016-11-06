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

export const authTypes = {
    GITHUB: 'GitHub',
    FACEBOOK: 'Facebook',
    LOCAL: 'Local'
};

export const authPaths = {
    [authTypes.GITHUB]: '/auth/github',
    [authTypes.FACEBOOK]: '/auth/facebook',
};