import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateEmployeeFormComponent } from './components/create-employee-form/create-employee-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    VideoListComponent, 
    EmployeesComponent, 
    CreateEmployeeFormComponent, 
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
}
