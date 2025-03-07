import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { ViewPatientComponent } from './pages/view-patient/view-patient.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PatientListComponent,
    AddPatientComponent,
    EditPatientComponent,
    ViewPatientComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PatientsModule {}
