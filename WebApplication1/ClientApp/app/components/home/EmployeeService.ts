import { Injectable, Inject } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Employee } from '../../Model/Employee';

@Injectable()
export class EmployeeService {
    myBaseUrl: string = "";

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myBaseUrl = baseUrl;
    }

    getAll() {
        let contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        contentHeaders.append('Access-Control-Allow-Origin', '*');
        let Employeeurl = this.myBaseUrl + 'api/Employee/Index'
        return this.http.get(Employeeurl, { headers: contentHeaders })
            .map((response: Response) => response.json());           

    }
}
