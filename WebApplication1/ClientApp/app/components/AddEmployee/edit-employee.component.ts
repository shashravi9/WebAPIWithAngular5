import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../Model/Employee';
import { EmployeeService } from '../home/EmployeeService';

@Component({
    templateUrl: './employee.component.html',
    providers: [EmployeeService]
})

export class EditEmployeeComponent implements OnInit {

    public empData: Employee[] = [];
    public sub: any;
    public empId: string;

    constructor(private route: ActivatedRoute, private router: Router, public empService: EmployeeService) {
       
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            this.empId = params['Id'];
        })
        this.loadData();
    }

    loadData() {

    }

}