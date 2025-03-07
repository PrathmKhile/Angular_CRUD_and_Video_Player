import { Component, EventEmitter, Input, Output, output, SimpleChanges } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-lifecycle-methods',
  imports: [
    EmployeesComponent
  ],
  templateUrl: './lifecycle-methods.component.html',
  styleUrl: './lifecycle-methods.component.css'
})
export class LifecycleMethodsComponent {

  @Input() count: number = 0;
  // @Output onCountChange: EventEmitter<number> = new EventEmitter<number>();

  // Call when input properties were change
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
  }

  // ngOnInit(){
  //   console.log("ngOnInit called");
  // }

  // // Call on every change
  // ngDoCheck(){
  //   console.log("ngDoCheck called");
  // }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }

  // ngAfterContentChecked(){
  //   console.log("ngAfterContentChecked called");
  // }

  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit called");
  // }

  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked called");
  // }

  // ngDestroy(){
  //   console.log("ngDestroy called");
  // }

  handleChanges(){
    this.count++;
  }
}
