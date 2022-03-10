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

  TotalData: any
  constructor(private SalesService : SalesDataServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    this.SalesService.viewData(form.value).subscribe((data:any)=>{
      if(data){
          if(data['status']){
            console.log(data)
          }
          else{
             this.TotalData = data
          }
      }
    })
    //  console.log(form.value);

   
     
  }
}
