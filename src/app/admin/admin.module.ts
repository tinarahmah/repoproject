import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TamuComponent } from './tamu/tamu.component';
import { RouterModule, Routes } from '@angular/router';
import { TamuDetailComponent } from './tamu-detail/tamu-detail.component';

import { FormsModule,  } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MaterialDesign } from '../material/material';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'tamu',
        component:TamuComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard'
      }
    ]
  }
]


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TamuComponent,
    TamuDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatCardModule,
    MaterialDesign,
    MatIconModule,
    
  ]
})
export class AdminModule { }
