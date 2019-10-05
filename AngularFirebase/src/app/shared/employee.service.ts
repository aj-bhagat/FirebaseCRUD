import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import { FormsModule } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  constructor() { }
}
