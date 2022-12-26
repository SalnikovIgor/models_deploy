import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ToxicMessageValidator {
    constructor() {}

    static createValidator(): AsyncValidatorFn  {
        const http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
        return (control: AbstractControl): Observable<ValidationErrors|null> => {         
            return http.post<{'label': number}>(`${environment.baseUrl}/toxic`, {'text': control.value}).pipe(
                delay(500),
                map((result) => result.label === 1 ? {'toxic': true} : null)
            )
        }
    }
}