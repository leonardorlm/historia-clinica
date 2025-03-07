import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css',
})
export class PatientListComponent {
  patients = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Pérez',
      birthDate: new Date(1990, 5, 10),
    },
    {
      id: 2,
      firstName: 'Ana',
      lastName: 'Gómez',
      birthDate: new Date(1985, 10, 25),
    },
  ];

  constructor(private router: Router) {}

  viewPatient(id: number) {
    this.router.navigate(['/patients/view', id]);
  }

  addPatient() {
    this.router.navigate(['/patients/add']);
  }

  editPatient(id: number) {
    this.router.navigate(['/patients/edit', id]);
  }

  deletePatient(id: number) {
    this.patients = this.patients.filter((p) => p.id !== id);
  }
}
