import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Components
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    MenubarModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
    FieldsetModule,
    SelectButtonModule,
    InputTextareaModule,
    FloatLabelModule,
    CardModule,
    MessageModule,
  ], // Exportamos PrimeNG
})
export class SharedModule {}
