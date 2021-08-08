import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { SearchFilterPipe } from 'src/Fillter/fillterlist';
import { LoginComponent } from './login/login.component';
import { AddStockComponent } from './stock/add-stock/add-stock.component';
import { StockComponent } from './stock/stock.component';
import { CompanyComponent } from './company/company.component';
import { ShowCompanyComponent } from './company/show-company/show-company.component';
import { AddEditCompanyComponent } from './company/add-edit-company/add-edit-company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    StockComponent,
    AddStockComponent,
    LoginComponent,
    CompanyComponent,
    ShowCompanyComponent,
    AddEditCompanyComponent ,
    DashboardComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [DatePipe], //CompanyService 
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
 