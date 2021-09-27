import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerficationCodeComponent } from './verfication-code/verfication-code.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    VerficationCodeComponent,
    AccountInformationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, SharedModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
