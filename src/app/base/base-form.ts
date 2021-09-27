import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

export class BaseForm {
  constructor(protected readonly location: Location) {}
  public form!: FormGroup;
  public loading$!: boolean;

  isValid(controlName: string, ValidatorType: string): boolean {
    const control = this.form.controls[controlName];

    if (control) {
      const result =
        control.hasError(ValidatorType) && (control.touched || control.dirty);

      return result;
    }

    return false;
  }

  cancel(): void {
    this.location.back();
  }
}
