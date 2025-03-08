import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, output, SimpleChanges } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-lifecycle-methods',
  imports: [
    EmployeesComponent,
    AboutComponent
],
  templateUrl: './lifecycle-methods.component.html',
  styleUrl: './lifecycle-methods.component.css'
})
export class LifecycleMethodsComponent {

  @Input() count: number = 0;
  @Output() onCountChange: EventEmitter<number> = new EventEmitter<number>();
  @ContentChild("div1") divElement!: ElementRef;

  // Call when input properties were change
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    if(this.divElement){
      console.log(this.divElement.nativeElement);
    }else{
      console.log(this.divElement);
    }
  }

  ngOnInit(){
    console.log("ngOnInit called");
  }

  // Call on every change
  ngDoCheck(){
    console.log("ngDoCheck called");
    if(this.divElement){
      console.log(this.divElement.nativeElement);
    }else{
      console.log(this.divElement);
    }
   
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    console.log(this.divElement.nativeElement);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
    console.log(this.divElement.nativeElement);
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("ngDestroy called");
  }

  handleChanges(){
    this.onCountChange.emit(this.count);
  }
}
