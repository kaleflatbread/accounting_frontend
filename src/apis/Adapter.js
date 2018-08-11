import { BadTokenError } from '../errors';

const API = 'http://localhost:3001/api/vi/users';

export default class Adapter {
  static getToken() {
    return localStorage.getItem('token');
  }

  static deleteToken() {
    localStorage.removeItem('token');
  }

  static getUserRecipes(id) {
    return fetch('API', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken(),
      }
    })
 	    .then(r => r.json())
  }

  static getCurrentUser() {
    return fetch('http://localhost:3000/current_user', {
   		 method: 'GET',
   		 headers: {
   			 'Content-Type': 'application/json',
   			 'Authorization': this.getToken(),
   		 }
   	 })
   	 	.then(res => {
   			// console.log(res);
   			if (res.ok) {
   				return res.json()
   			} else if (res.status === 401) {
   				throw new BadTokenError("Bad token")
   			} else {
   				throw new Error("Unhandled error")
   			}
   		})
  }

  static postLoginUser(email, password) {
    return fetch('http://localhost:3001/sessions/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
        .then(res => res.json())
  }
}
