import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FkrevComponent } from './fkrev/fkrev.component';

const routes:Routes=[{path:'',redirectTo:'/home', pathMatch:'full'},{path:'home',component:FkrevComponent}, {path:'error', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
