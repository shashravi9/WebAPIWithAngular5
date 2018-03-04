import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../Model/Employee';
import { EmployeeService } from './EmployeeService'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [EmployeeService]
})
export class HomeComponent implements OnInit {
    public empData: Employee[] = [];

    constructor(public router: Router, public empService: EmployeeService ) {
    }

    ngOnInit() {
        this.getEmployeeData();
    }

    getEmployeeData() {
        //this.empService.getAll().subscribe(data => {
        //    this.empData = data;
        //})
    }

    addEmployee() {
        this.router.navigate(['\addEmployee']);
    }

    editEmployee(empUid: string) {
        
    }

    deleteEmployee(empUid: string) {

    }
}
