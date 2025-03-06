import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';
import { PaginatedData } from '../../models/paginatedData';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ArrayPipe } from '../../pipes/array.pipe';
import { CreateEmployeeFormComponent } from '../create-employee-form/create-employee-form.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, ArrayPipe, CreateEmployeeFormComponent, ReactiveFormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  // employees: string[] = [];

  // employeeObservable: Observable<string> = new Observable<string>( (observable) => {
  //   setTimeout( () => {
  //     observable.next("Ram");
  //   },2000);
  //   setTimeout( () => {
  //     observable.next("Shyam");
  //   },4000);
  //   setTimeout( () => {
  //     observable.next("Seeta");
  //   },7000);

  //   setTimeout( () => {
  //     observable.error("Error");
  //   },8000);

  //   setTimeout( () => {
  //     observable.complete();
  //   },6000);
  // })

  // ngOnInit(){
  //   this.employeeObservable.subscribe({
  //     "next":(data: string) => {
  //       console.log(data);
  //       this.employees.push(data);
  //     },
  //     "error": (error: any) => {
  //       console.log(error);
  //     },
  //     "complete": () => {
  //       console.log("stream is complete");
  //     }
  //   })
  // }

  ngOnInit(){
    this.getEmployees();
    this.loadEmployees();
  }
  employeeService: EmployeeService = inject(EmployeeService);
  employees: Employee[] = [];
  pageNumber: number = 1;
  pageSize: number = 2;
  searchText: string = "";
  totalPages: number = 0;
  totalCount: number = 0;
  updateEmployeeFlag: boolean = false;
  updateEmployeeId: number = -1;
  updateEmployeeForm: FormGroup = new FormGroup({
    "name": new FormControl("", [Validators.required, Validators.minLength(4)]),
    "email" : new FormControl("", [Validators.required]),
    "salary": new FormControl(0, [Validators.required])
  });

  // ngOnChange(){

  // }

  getEmployees(){
    this.employeeService.getEmployees(
      this.pageNumber, 
      this.pageSize, 
      this.searchText
    );
  }

  loadEmployees(){
    this.getEmployees();
    this.employeeService.paginatedData$.subscribe({
      next: (paginatedData: PaginatedData) => {
        this.employees =  paginatedData.employees;
        this.totalCount = paginatedData.totalCount;
        this.totalPages = paginatedData.totalPages;
      }
    });
  }

  onChangePage(page: number){
    this.pageNumber = page;
    this.loadEmployees();
  }

  showUpdateEmployeeFlag(employee: Employee){
    this.updateEmployeeId = employee.employeeId;
    this.updateEmployeeFlag = true;
    this.updateEmployeeForm.setValue({
      "name":employee.name,
      "email": employee.email,
      "salary": employee.salary
    });
    console.log(this.updateEmployeeForm.value.salary);
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.updateEmployeeId, this.updateEmployeeForm.value)
      .subscribe({
        next: (response: HttpResponse<any>) =>{
          console.log(response.status);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
        complete: () => {
          this.updateEmployeeId = -1;
          this.updateEmployeeFlag = false;
          this.loadEmployees();
        }
      });
  }
}
