import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../Model/Employee';
import { EmployeeService } from '../home/EmployeeService';

@Component({
    templateUrl: './employee.component.html',
    providers: [EmployeeService]
})

export class AddEmployeeComponent implements OnInit{
    public empData: Employee[] = [];

    constructor(public router: Router, public empService: EmployeeService) {

    }

    ngOnInit() {

    }

    save(form: Employee, isValid: boolean) {
        console.log(form);
        console.log(isValid);
    }

    back() {
        this.router.navigate(['/home'])
    }

}