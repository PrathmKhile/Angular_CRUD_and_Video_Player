import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-employee-form',
  imports: [FormsModule],
  templateUrl: './create-employee-form.component.html',
  styleUrl: './create-employee-form.component.css'
})
export class CreateEmployeeFormComponent {
  createEmployeeFormData: Employee = new Employee(-1, "", "", 0);

  @Output() onEmployeeCreation: EventEmitter<null> = new EventEmitter();


  constructor(private employeeService: EmployeeService){}

  createEmployee(){
    this.employeeService.createEmployee(this.createEmployeeFormData).subscribe({
      "next": (response: HttpResponse<Employee>) => {
        console.log(response.body);
      },
      "error": (error: any) => {
        console.log(error.error);
      },
      "complete": () => {
        console.log("All Data Receive");
        this.onEmployeeCreation.emit(null);
        this.createEmployeeFormData = new Employee(-1, "", "", 0);
      }
    });

  }
}
