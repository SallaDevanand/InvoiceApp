import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmploeeComponent } from './Employee/emploee.component';
import { DepartmentComponent } from './Employeee/department.component';

@NgModule({
  declarations: [
    AppComponent,
    EmploeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
