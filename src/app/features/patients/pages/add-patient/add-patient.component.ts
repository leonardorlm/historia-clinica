import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  patientForm!: FormGroup;
  yesNoOptions = [
    { label: 'Sí', value: true },
    { label: 'No', value: false },
  ];
  conditions = [
    { name: 'Cardiovasculares', checked: false },
    { name: 'Pulmonares', checked: false },
    { name: 'Renales', checked: false },
    { name: 'Gastrointestinales', checked: false },
    { name: 'Hematológicas', checked: false },
    { name: 'Endocrinas', checked: false },
    { name: 'Mentales', checked: false },
    { name: 'Dermatológicas', checked: false },
    { name: 'Neurológicas', checked: false },
    { name: 'Metabólicas', checked: false },
    { name: 'Marcapasos', checked: false },
    { name: 'Cardiopatías', checked: false },
    { name: 'Neuropatías', checked: false },
    { name: 'Implante dental', checked: false },
    { name: 'Cáncer', checked: false },
    { name: 'Convulsiones', checked: false },
  ];
  noConditions = [
    { name: 'Tabaquismo', checked: false },
    { name: 'Alcoholismo', checked: false },
    { name: 'Bebe café', checked: false },
    { name: 'Consume  golosinas', checked: false },
  ];
  genderOptions: any[] = [
    { name: 'Masculino', code: 'M' },
    { name: 'Femenino', code: 'F' },
    { name: 'Otro', code: 'O' },
  ];
  selectedTeeth: Set<number> = new Set();
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      conditions: [[]],
      noConditions: [[]],
      reason: ['', Validators.required],
      date: ['', Validators.required],
      record: ['', Validators.required],
      gender: ['', Validators.required],
      schooling: ['', Validators.required],
      proxy: ['', Validators.required],
      occupation: ['', Validators.required],
      lastDate: ['', Validators.required],
      reasonInput: ['', Validators.required],
      inputTM: [''],
      nameDoctor: [''],
      phoneDoctor: [''],
      chkTM: [''],
      pregnant: [''],
      timePregnant: [''],
      contraceptive: [''],
      inputAM: [''],
      chkAM: [''],
      other: [''],
      inputFT: [''],
      inputFA: [''],
      inputFC: [''],
      inputFG: [''],
      frequency: [''],
      anesthesia: [''],
      allergic: [''],
      auxiliaries: [''],
      timeAnesthesia: [''],
      chkCV: [false],
      chkEC: [false],
      inputScheme: [''],
      head: [''],
      face: [''],
      atm: [''],
      ganglia: [''],
      lips: [''],
      particularSigns: [''],
      gum: [''],
      language: [''],
      hardPalate: [''],
      softPalate: [''],
      pharynx: [''],
      floorMouth: [''],
      residualRidge: [''],
      occlusionType: [''],
      gingivitis: [''],
      periodontitis: [''],
      gingivalRecession: [''],
      periodontalBalls: [''],
      mobility: [''],
      missingTeeth: [''],
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log('Paciente guardado:', this.patientForm.value);
      this.router.navigate(['/patients']);
    }
  }

  toggleTooth(toothId: number): void {
    if (this.selectedTeeth.has(toothId)) {
      this.selectedTeeth.delete(toothId);
    } else {
      this.selectedTeeth.add(toothId);
    }
  }

  isSelected(toothId: number): boolean {
    return this.selectedTeeth.has(toothId);
  }

  toggleCondition(conditionName: string, checked: boolean) {
    const conditionsArray = this.patientForm.controls['conditions'].value;
    if (checked) {
      conditionsArray.push(conditionName);
    } else {
      const index = conditionsArray.indexOf(conditionName);
      if (index > -1) {
        conditionsArray.splice(index, 1);
      }
    }
    this.patientForm.controls['conditions'].setValue([...conditionsArray]);
  }

  toggleNoCondition(conditionName: string, checked: boolean) {
    const conditionsArray = this.patientForm.controls['noConditions'].value;
    if (checked) {
      conditionsArray.push(conditionName);
    } else {
      const index = conditionsArray.indexOf(conditionName);
      if (index > -1) {
        conditionsArray.splice(index, 1);
      }
    }
    this.patientForm.controls['noConditions'].setValue([...conditionsArray]);
  }

  onCancel() {
    this.router.navigate(['/patients']);
  }
}
