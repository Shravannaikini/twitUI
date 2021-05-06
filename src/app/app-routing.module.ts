import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedsComponent } from './beds/beds.component';
import { ErrorComponent } from './error/error.component';
import { FabifluComponent } from './fabiflu/fabiflu.component';
import { HomeComponent } from './home/home.component';
import { IcuComponent } from './icu/icu.component';
import { OxygenComponent } from './oxygen/oxygen.component';
import { PlasmaComponent } from './plasma/plasma.component';
import { TataComponent } from './tata/tata.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'tata' , component:TataComponent},
  {path:'beds', component:BedsComponent},
  {path:'icu', component: IcuComponent},
  {path:'plasma', component: PlasmaComponent},
  {path:'oxygen', component: OxygenComponent},
  {path: 'fabiflu', component: FabifluComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
