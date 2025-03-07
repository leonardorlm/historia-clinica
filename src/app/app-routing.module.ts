import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'; // Importa el AuthGuard

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./features/patients/patients.module').then(
        (m) => m.PatientsModule
      ),
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./features/appointments/appointments.module').then(
        (m) => m.AppointmentsModule
      ),
    canActivate: [AuthGuard], // Protege esta ruta
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
