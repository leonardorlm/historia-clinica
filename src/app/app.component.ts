import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'historia-clinica';
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
