import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { ResultComponent } from './components/demo/demo6/result/result.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { Exo1Component } from './components/exercice/exo1/exo1.component';
import { Exo2Component } from './components/exercice/exo2/exo2.component';
import { Exo3Component } from './components/exercice/exo3/exo3.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "demo", component : DemoComponent, children : [
    {path : "demo1", component : Demo1Component},
    {path : "demo2", component : Demo2Component},
    {path : "demo3", component : Demo3Component},
    {path : "demo4", component : Demo4Component},
    {path : "demo5", component : Demo5Component},
    {path : "demo6", canActivate : [AuthGuard], component : Demo6Component},
    {path : "result/:toto", component : ResultComponent},
    {path : "demo7", component : Demo7Component},
    {path : "demo8", component : Demo7Component},

  ]},
  {path : "exercice", component : ExerciceComponent, children : [
    {path : "exo1", component : Exo1Component},
    {path : "exo2", component : Exo2Component},
    {path : "exo3", component : Exo3Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
