'use strict';

let salaryFunction= function salaryFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
let idFunction= function idFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let employeesArray=[];


let intialemployeeID= idFunction(1000, 1000);

function Employee(empName,empDepartment,empLevel,empImage){
    this.employeeId=0;
    this.employeeFullName = empName;
    this.employeeDepartment = empDepartment;
    this.employeeLevel = empLevel;
    this.employeeImage = empImage;
    this.employeeSalary=0;
    this.generateRandomsalary=function(){

        let employeeRandomSalary;
        let employeeSalaryTax;
        switch (this.employeeLevel) {
            case 'Senior':
                employeeRandomSalary=salaryFunction(1500, 2000);
                 employeeSalaryTax =(employeeRandomSalary)*.075;
                 this.employeeSalary=(employeeRandomSalary)-(employeeSalaryTax);
                break;
            case 'Mid-Senior':
                employeeRandomSalary=salaryFunction(1000, 1500);
            employeeSalaryTax =(employeeRandomSalary)*.075;
            this.employeeSalary=(employeeRandomSalary)-(employeeSalaryTax);
                break;
            case 'Junior':
                employeeRandomSalary=salaryFunction(500, 1000);
             employeeSalaryTax =(employeeRandomSalary)*.075;
             this.employeeSalary=(employeeRandomSalary)-(employeeSalaryTax);
                break;
            default:
               
                break;
        }
    
    }
    this.generatId=function(){
        this.employeeId=intialemployeeID ;
        intialemployeeID=this.employeeId+1
    }

    employeesArray.push(this);
}

