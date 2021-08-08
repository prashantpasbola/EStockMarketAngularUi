import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/service/company.service';
import { StockService } from 'src/service/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  CompanyList: any;
  searchCode: string = "";
  companyDetail: any = {};
  companyStockDetail: any;

  minStock: string = "";
  maxStockDetail: string = "";
  avgStockDetail: string = "";



  disableSelect: boolean = true;
  showCompanyDetails: boolean = false;
  showCompanyStocksDetails: boolean = false;
  StartDate: Date = new Date();
  EndDate: Date = new Date();

  constructor(private router: Router, private service: CompanyService, private stockService: StockService) { }

  ngOnInit(): void {
    this.compantList();
    this.showCompanyDetails = false;
    this.showCompanyStocksDetails = false;
  }

  onClick() {
    this.router.navigate(['/company']);
  }
  compantList() {
 
    this.service.getCompantList().subscribe(data => {

      this.CompanyList = data;
    })
  }

  searchCompany(code: string) {
    this.service.getCompanyDetail(code).subscribe(data => {
     
      if (data) {
        this.companyDetail = data;
        this.showCompanyDetails = true;
        this.showCompanyStocksDetails = false;
  //       this.minStock=data
  // maxStockDetail: string = "";
  // avgStockDetail: string = "";
      }

    })
  }
  onChange(endDate: Date) {
    if (this.StartDate) {
      this.stockService.getCompanyStockDetail(this.searchCode,this.StartDate,endDate).subscribe(data => {
        debugger
        if (data) {
          this.companyStockDetail = data;
          this.showCompanyDetails = true;
          this.showCompanyStocksDetails = true;
        }

      })

    }else
    {
      alert("Please select start date");
    }
  }
}
