import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  constructor(private http: HttpClient) {}

  apiEmployees = 'http://localhost:8080/api/employees';

  ngOnInit() {
    this.getEmployees().subscribe((data) => {
      console.log(data);
    });
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.apiEmployees);
  }
}
