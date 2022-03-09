
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component'
import { ViewComponent } from './view/view.component';



const routes: Routes = [
    {path: 'formsubmit',component:AddComponent},
    {path: 'viewdata',component:ViewComponent}

]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }