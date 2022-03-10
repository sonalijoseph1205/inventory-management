import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalesDataServiceService } from '../shared/sales-data-service.service';
import { Router } from '@angular/router';
// import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[SalesDataServiceService]
})
export class AddComponent implements OnInit {

  constructor(private SalesService : SalesDataServiceService) { }

  ngOnInit(): void {
  }
  
  
  onSubmit(form: NgForm)
  {
    
    this.SalesService.getData(form.value).subscribe(data=>{
      console.log(data)
    })
    //  console.log(form.value);
     
  }

}
