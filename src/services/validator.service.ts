import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  static verifyEmail(control:any) {
    if (!control.value) return null;
    let value = control.value.toString();
    const emailRegex = /^[\w\d._%+-]+@[\w\d.-]+\.[\w\d]{2,6}$/;
    if (!value.match(emailRegex)) {
      return { 'invalidEmail': true };
    }
    return null;
  }
  
  static verifyPhone(control:any) {
    try {
      if (!control.value || (control.value).length > 19) {
        return { 'invalidPhone': true };
      }
      if (!control.value.match(/^(1900|1800)[0-9]{4}$|(05|03|04|07|08|09|024|028|06)[0-9]{8}$|(\+84|84)[0-9]{9}$|(02839159159\:)[0-9]{6}$|(\+84|84)[0-9]{8}$|(\+84|84)[0-9]{10}$|(021[012345689]|023[23456789]|020[3456789]|022[0123456789]|029[01234679]|025[123456789]|026[01239]|027[01234567])[0-9]{7}$/g)) {
        return { 'invalidPhone': true };
      }
      const phoneNumber = control.value;
      if (phoneNumber) {
        const { isValid } = phoneNumber;

        if (!isValid.bind(phoneNumber)()) {
          return { 'invalidPhone': true };
        }
      }
    } catch (ex) {
      return { 'invalidPhone': true };
    }
    return null;
  }
}
