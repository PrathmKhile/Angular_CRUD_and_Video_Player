import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { PaginatedData } from '../models/paginatedData';
import { PersonalitySubject } from '../models/personalitySubject';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly BASE_URL = "https://localhost:7297/api/Employees";

  paginatedDataSubject: PersonalitySubject<PaginatedData> = new 
  PersonalitySubject<PaginatedData>(
    new PaginatedData(1, 2, 0, 0, [])
  );
  paginatedData$: Observable<PaginatedData> = this.paginatedDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee): Observable<HttpResponse<Employee>>{
    return this.http.post<Employee>(this.BASE_URL, employee, {
      observe: "response"
    });
  }

  getEmployees(pageNumber: number, pageSize: number, searchText: string){
    let url = `${this.BASE_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    if(searchText !== ""){
      url = `${this.BASE_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}&searchText=${searchText}`;
    }

    // this.http.get<PaginatedData>(url).subscribe({
    //   next: (paginatedData: PaginatedData) => {
    //     this.paginatedDataSubject.next(paginatedData);
    //   }
    // });

    this.paginatedData$ = this.http.get<PaginatedData>(url);
  }
  updateEmployee(employeeId: number, employee: Employee){
    return this.http.put(`
      ${this.BASE_URL}/${employeeId}`,
      employee,
      {observe: "response"}
    );
  }

  deleteEmployee(employeeId: number){
    return this.http.put(`
      ${this.BASE_URL}/${employeeId}`,
      {observe: "response"}
    );
  }
}
