import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly KEY = 'token';

  saveToken(token: string) {
    return localStorage.setItem(this.KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(this.KEY);
  }

  getToken() {
    return localStorage.getItem(this.KEY);
  }

  isLogged() {
    return !!this.getToken();
  }
}
