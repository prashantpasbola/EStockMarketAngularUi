import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  readonly APIUrl=environment.apiUrlStock;
  
  constructor(private http:HttpClient) { }
  getStockList():Observable<any[]>{
  //  debugger
    return this.http.get<any>(this.APIUrl+'/api/v1.0/market/Stocks/getStock');
  }
  addEditStock(stock:any){  
    console.log(stock);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<any[]>(this.APIUrl+'/api/v1.0/market/Stocks/addStocks',stock,httpOptions);
  }
  
  
  getCompanyStockDetail(companyCode:string,startDate:Date,endDate:Date){  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.get<any[]>(this.APIUrl+'/api/v1.0/market/Stocks/get/'+companyCode+'/'+startDate+'/'+endDate);
  }
}


