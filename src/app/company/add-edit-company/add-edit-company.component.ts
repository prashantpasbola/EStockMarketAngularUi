import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/service/company.service';

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.css']
})
export class AddEditCompanyComponent implements OnInit {

  constructor(private router: Router,private service: CompanyService) { }
  @Input() com: any;
  Id: string = "";
  CompanyName: string = "";
  CompanyCode: string = "";
  CompanyCEO: string = "";
  CompanyTurnover: string = "";
  StockExchange: string = "";
  CompanyWebsite: string = "";
  ngOnInit(): void {
debugger
    if(this.com.Id !='')
   {
    
    this.Id = this.com.Id;
    this.CompanyName = this.com.companyName;
    this.CompanyCode = this.com.companyCode;
    this.CompanyCEO = this.com.companyCEO;
    this.CompanyTurnover = this.com.companyTurnover;
    this.StockExchange = this.com.stockExchange;
    this.CompanyWebsite = this.com.companyWebsite;
  }
  }


  addCompany() {

    var val = {
      Id: this.Id,  //'60e2eb8330a7395e97ff0fce',
      CompanyName: this.CompanyName,
      CompanyCode: this.CompanyCode,
      CompanyCEO: this.CompanyCEO,
      CompanyTurnover: this.CompanyTurnover,
      StockExchange: this.StockExchange,
      CompanyWebsite: this.CompanyWebsite
    };
    this.service.registerCompany(val).subscribe(data => {
      debugger
      if (data !=null) {
     alert("Company details added sucessfully");
     location.reload();
      }
    })
  }

  
}
