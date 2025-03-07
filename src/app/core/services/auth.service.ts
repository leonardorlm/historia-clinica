import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Verifica si hay un token
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('token', 'dummy-token'); // Simula autenticación
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token'); // Elimina el token
    this.router.navigate(['/auth/login']); // Redirige a login
  }
}
