import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { LoggedinUser } from './LogInModel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
readonly APIUrl=environment.apiUrlCompany;

  constructor(private http:HttpClient) { }
  
  // logIn(userCred:any): Observable<LoggedinUser>{  
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
  //   return this.http.post<LoggedinUser>(this.APIUrl+'/api/v1.0/market/Auth/authenticate',userCred,httpOptions);
  // }
 
  // getCompantList():Observable<any[]>{
  //   const httpOptions = { headers: new HttpHeaders({'Authorization': 'Bearer ' + sessionStorage.getItem('token') }) };  
  //      return this.http.get<any>(this.APIUrl+'/api/v1.0/market/Company/getall',httpOptions);
  // }

  // registerCompany(val:any){  
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + sessionStorage.getItem('token') }) };  
  //   return this.http.post<any[]>(this.APIUrl+'/api/v1.0/market/Company/register',val,httpOptions);
  // }
  

  // deleteCompany(companyCode:any){  
  //   const httpOptions = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + sessionStorage.getItem('token') }) };  
  //   return this.http.delete<any[]>(this.APIUrl+'/api/v1.0/market/Company/delete/'+companyCode,httpOptions);
  // }

  
// getCompanyDetail(companyCode:any){  
//   const httpOptions = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + sessionStorage.getItem('token') }) };  
//   return this.http.get<any[]>(this.APIUrl+'/api/v1.0/market/Company/info/companycode?companycode='+companyCode,httpOptions);
// }

//-- Api GateWay
logIn(userCred:any): Observable<LoggedinUser>{  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
  return this.http.post<LoggedinUser>(this.APIUrl+'/api/Login',userCred,httpOptions);
}

getCompantList():Observable<any[]>{
  const httpOptions = { headers: new HttpHeaders({'Authorization': 'Bearer ' + sessionStorage.getItem('token') }) };  
     return this.http.get<any>(this.APIUrl+'/api/CompanyDetailsList',httpOptions);
}


registerCompany(val:any){  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + sessionStorage.getItem('token') }) };  
  return this.http.post<any[]>(this.APIUrl+'/api/Register',val,httpOptions);
}


deleteCompany(companyCode:any){  
  const httpOptions = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + sessionStorage.getItem('token') }) };  
  return this.http.delete<any[]>(this.APIUrl+'/api/Delete/'+companyCode,httpOptions);
}






}
