import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SalesDataServiceService } from '../shared/sales-data-service.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private SalesService : SalesDataServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    this.SalesService.viewData(form.value).subscribe(data=>{
      console.log(data)
    })
     console.log(form.value);

   
     
  }
}
