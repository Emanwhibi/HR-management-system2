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

let hadi = new Employee("Hadi Ahmad","Finance","Mid-senior","assests/Hadi.jpg")
let safi = new Employee("Safi Walid","Administration","Mid-Senior","assets/Safi.jpg")
let rana = new Employee("Rana Saleh","Development","Junior","assets/Rana.jpg")
let tamara = new Employee("Tamara Ayoub","Marketing","Senior","assets/Tamara.jpg")
let ghazi = new Employee("Ghazi Samer","Administration","Senior","assets/Ghazi.jpg")
let omar = new Employee("Omar Zaid","Development","Senior","assets/Omar.jpg")
let lana = new Employee("Lana Ali","Finance","Senior","assets/Lana.jpg")

let header=document.createElement("div");
let body=document.getElementsByTagName("body")[0];
header.id="header"
body.appendChild(header);

let logoImageA=document.createElement("A");
logoImageA.setAttribute("href", "./index.html")
header.appendChild(logoImageA);


