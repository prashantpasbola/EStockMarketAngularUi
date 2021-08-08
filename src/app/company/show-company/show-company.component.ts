import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/service/company.service';
import { SearchFilterPipe } from 'src/Fillter/fillterlist';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit {

  constructor(private service:CompanyService ) { }

  CompanyList:any=[];
  CompanyTitle : string="Add Company";;
  ActivateAddEditCompany:boolean=false;
  com:any;
  searchTerm: string ='';


  ngOnInit(): void {
   this.compantList();
  }
  addClick(){
    this.com={};   
    this.ActivateAddEditCompany=true;
  }

   closeClick()
  {
    this.com={};
    this.ActivateAddEditCompany=false;
  }

  compantList()
  {
    this.service.getCompantList().subscribe(data=>{
      
      this.CompanyList=data;
    })
  }

  deleteClick(dt:string)
  {  
    debugger 
  this.service.deleteCompany(dt).subscribe(data => {
    debugger
    if (data !=null) {
   alert("Company details delete sucessfully");
   location.reload();
    }
  })
}

}
