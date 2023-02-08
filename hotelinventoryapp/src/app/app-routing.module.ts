import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  { path: 'rooms', 
    component: RoomsComponent 
  },
  {path:'', redirectTo: '/rooms', pathMatch: 'full'},  //default url
  {path:'**', component:NotfoundComponent} //not existing url 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
