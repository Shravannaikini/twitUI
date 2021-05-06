import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TataComponent } from './tata/tata.component';
import { BedsComponent } from './beds/beds.component';
import { OxygenComponent } from './oxygen/oxygen.component';
import { PlasmaComponent } from './plasma/plasma.component';
import { IcuComponent } from './icu/icu.component';
import { FabifluComponent } from './fabiflu/fabiflu.component';
import { ErrorComponent } from './error/error.component';
import { FilterbluePipe } from './filterblue.pipe';
import { FiltercompComponent } from './filtercomp/filtercomp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TataComponent,
    BedsComponent,
    OxygenComponent,
    PlasmaComponent,
    IcuComponent,
    FabifluComponent,
    ErrorComponent,
    FilterbluePipe,
    FiltercompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
