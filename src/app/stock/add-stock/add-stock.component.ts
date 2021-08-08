import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/service/company.service';
import { StockService } from 'src/service/stock.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  @Input() stock: any;
  CompanyList: any;
  register!: FormGroup;
  CompanyCode: string = "";
  StockPrice: number = 0.0;
  StartDate: Date = new Date();
  EndDate: Date = new Date();

  constructor(private frmBuilder: FormBuilder, public datepipe: DatePipe, private service: CompanyService, private stockService: StockService) { }

  ngOnInit(): void {
    this.compantList();
    this.register = this.frmBuilder.group({
      StockId:[],
      CompanyCode: ["", [Validators.required]],
      StockPrice: ["", [Validators.required]],
      StartDate: ["", [Validators.required]],
    });
    console.log(this.stock, "stock value");
    if (this.stock.stockId != 0) {
      this.setValue(this.stock);
    }

  }

  setValue(stock: any) {
    this.register.patchValue(
      {
        "StockId": stock.stockId,
        "CompanyCode": stock.companyCode,
        "StockPrice": stock.stockPrice,
        "StartDate": stock.startDate != null ? this.datepipe.transform(stock.startDate, 'yyyy-MM-dd') : stock.startDate,
     //   "EndDate": stock.endDate != null ? this.datepipe.transform(stock.endDate, 'yyyy-MM-dd') : stock.endDate,
      }
    );

  }



  compantList() {
    this.service.getCompantList().subscribe(data => {

      this.CompanyList = data;
    })
  }
  //  this.CompanyList

  addEditStock() {
    debugger
    if (!this.register.valid) {
      alert("Fill all mandatory fields");
    }
    else {
      this.stockService.addEditStock(this.register.value).subscribe(data => {       
      });

      location.reload();
    }
  }



}
