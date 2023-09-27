import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';

export function multipleWordsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const words: Array<string> = control.value.trim().split(' ');

    return words.length < 2 ? { multipleWords: true } : null;
  };
}
