import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../store-service.service';

@Component({
  selector: 'LIST OF PRODUCTS PAGE',
  templateUrl: '../Products/products.component.html',
  styleUrls: [ '../Products/products.component.css' ]
})
export class ProductComponent {
  public selectedItem:string=""

  constructor(private dataService:DataService) { }

  onProductSubmit(formData:NgForm):void{
    this.dataService.setProductData(formData.value);
  }
}