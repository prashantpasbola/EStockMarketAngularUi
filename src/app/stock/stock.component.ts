import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/service/company.service';
import { StockService } from 'src/service/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private stockService:StockService) { }


  StockList:any=[];
  StockTitle : string="";
  ActivateAddEditStock:boolean=false;
  stock:any;
  searchTerm: string ='';
  ngOnInit(): void {
   
    this.stockList();
  }

  addClick(){
    this.stock={};   
    this.StockTitle="Add Stock Details";
    this.ActivateAddEditStock=true;
  }

  editClick(item:any)
  {
    this.stock=item;   
    this.StockTitle="Edit Stock Details";
    this.ActivateAddEditStock=true;
  }


   closeClick()
  {
    this.stock={};
    this.ActivateAddEditStock=false;
  }

  
  stockList()
  {
    //debugger
    this.stockService.getStockList().subscribe(data=>{
      
      this.StockList=data;
    })
  }
}
