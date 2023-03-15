import {Injectable} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {ERROR_MESSAGES} from '../config/constant'; 

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  static getErrorMsg(formControl: AbstractControl, customError = {}): string {
    const errors = formControl.errors;
    let error = '';
    let hasError;
    if (errors) {
      hasError = Object
        .keys(errors)
        .some(errorKey => {
          if (errors[errorKey]) {
            error = customError[errorKey] || ERROR_MESSAGES[errorKey] || 'Invalid value';
            return true;
          } else {
            return false;
          }
        });
    }

    return hasError ? error : '';
  }

  validateAllFormFields(formGroup?: FormGroup): void {
    Object
      .keys(formGroup.controls)
      .forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          if (typeof control.value === 'string') {
            control.setValue(control.value.trim());
          }
          control.markAsDirty({onlySelf: true});
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        } else if (control instanceof FormArray) {
          control.controls.forEach(ctrl => {
            if (ctrl instanceof FormControl) {
              if (typeof ctrl.value === 'string') {
                ctrl.setValue(ctrl.value.trim());
              }
              ctrl.markAsDirty({onlySelf: true});
            } else if (ctrl instanceof FormGroup) {
              this.validateAllFormFields(ctrl);
            }
          });
        }
      });
  }
}
