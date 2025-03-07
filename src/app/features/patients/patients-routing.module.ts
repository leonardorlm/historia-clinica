import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { ViewPatientComponent } from './pages/view-patient/view-patient.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';

const routes: Routes = [
  { path: '', component: PatientListComponent },
  { path: 'add', component: AddPatientComponent },
  { path: 'edit/:id', component: EditPatientComponent },
  { path: 'view/:id', component: ViewPatientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
