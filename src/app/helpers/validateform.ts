import { FormControl, FormGroup } from '@angular/forms';

export default class ValidateForm {
  static validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control && (control as any) instanceof FormGroup) {
        this.validateAllFormFields(control as FormGroup);
      }
    });
  }
}
