import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  menuItems = [
    { label: 'Pacientes', icon: 'pi pi-users', routerLink: '/patients' },
    { label: 'Citas', icon: 'pi pi-calendar', routerLink: '/appointments' },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }
}
