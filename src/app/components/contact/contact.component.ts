import { Component } from '@angular/core';
import { LifecycleMethodsComponent } from '../lifecycle-methods/lifecycle-methods.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [LifecycleMethodsComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  count: number = 10;

  handleCountChange(event: any){
    this.count = event + 10;
  }

}
