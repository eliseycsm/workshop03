import { ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment'

/* 
factory fn:
function fnName(control: AbstractControl): {[key: string] : boolean} | null {
    return null
}
 */

export function forbiddenDate(dateVal: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        var now = moment().subtract(1, "days")

        /* let now = new Date()    
        let dueDate = new Date(control.value) 
        if (dueDate < now) { */
            
        if (moment(control.value) < now) {
            return { dateIsBefore: true }
        }
        return null
    }

}