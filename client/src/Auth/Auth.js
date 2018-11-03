import auth0 from 'auth0-js'


export default class Auth {
    auth0 = new auth0.WebAuth({
    domain: 'bookbuzz.auth0.com',
    clientID: 'd6vp8JYm_j_1ULgrlx4GPtjl3mvzP06O',
    redirect: `${window.location.origin}/profile`,
    audience: "https://bookbuzz.auth0.com/userinfo",
    responseType: 'token id_token',
    scope: 'openid'

    });

    constructor() {
        this.login = this.login.bind(this)
    }

    login() {
    this.auth0.authorize()
    }


    }
