import { AbstractControl, ValidatorFn } from "@angular/forms";

export function TailleValidator(min : number, max : number) : ValidatorFn {
 return (control : AbstractControl) =>  {
    let value : string = control.value
    if(value == null) return null
    if(value.length < min) return {'tropPetitError' : 'La chaine de caratère doit faire minimum ' + min + ' caractère'}
    if(value.length > max) return {'tropGrandError' : 'La chaine de caratère doit faire maximum ' + max + ' caractère'}
    return null
 }
}
