import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

// MATERIAL MODULES
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  FlexLayoutModule,
  MatSelectModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
];
const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS, NotFoundComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    TranslateModule.forRoot({ extend: true }),
  ],
  exports: [...MATERIAL_MODULES, ...COMPONENTS, TranslateModule],
})
export class SharedModule {}
