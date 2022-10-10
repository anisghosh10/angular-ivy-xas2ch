import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../store-service.service';

@Component({
  selector: 'USER DETAILS PAGE',
  templateUrl: '../User-Details/user.component.html',
  styleUrls: ['../User-Details/user.component.css'],
})
export class UserComponent {
  public fisrtname: string = '';
  public address: string = '';
  public mobile: string = '';
  public email: string = '';

  constructor(private dataService: DataService) {}

  onSubmit(formData: NgForm): void {
    this.dataService.setUserData(formData.value);
  }
}
