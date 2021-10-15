import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

// MATERIAL MODULES
import { MatButtonModule } from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { CodeInputModule } from 'angular-code-input';
import { LacMatTelInputModule } from 'lac-mat-tel-input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  FlexLayoutModule,
  MatSelectModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  LacMatTelInputModule,
  MatTabsModule,
  MatExpansionModule,
  NgxNumberSpinnerModule,
  MatSliderModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatDialogModule,
  NgxMaterialTimepickerModule,
];
const COMPONENTS = [NotFoundComponent, HeaderComponent, ConfirmDeleteComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    RouterModule,
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: true,
    }),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({ extend: true }),
  ],
  exports: [
    ...MATERIAL_MODULES,
    ...COMPONENTS,
    TranslateModule,
    ReactiveFormsModule,
    CodeInputModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
