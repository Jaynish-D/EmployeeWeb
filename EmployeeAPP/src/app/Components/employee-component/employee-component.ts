import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-employee-component',
  imports: [],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {
  @ViewChild('myModal') model: ElementRef | undefined;

  openModel() {
    const empModel = document.getElementById('myModal');
    if (empModel != null) {
      empModel.style.display = 'block';
    }
  }
  closeModal() {
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }
}
