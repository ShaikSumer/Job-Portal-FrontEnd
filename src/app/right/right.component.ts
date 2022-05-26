import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  capgemini:jobs={
    companyName : "Company:-CAPGEMINI,",
    jobRole: 'Role:-Java Developer,',
    salary: 'salary:-6LPA,',
    location: 'Location:-Banglore,',
    experience: ' experience:-5years',
    education: 'MBA/MCA',
    status:false
    
  }
  wipro:jobs={
    companyName : "Company:-WIPRO,",
    jobRole: 'Role:-Java Developer,',
    salary: 'salary:-5LPA,',
    location: 'Location:-Hyderabad,',
    experience: ' experience:-2years',
    education: 'Graduate',
    status:true
    
  }
  accenture:jobs={
    companyName : "Company:-ACCENTURE,",
    jobRole: 'Role:-Sr.Java Developer,',
    salary: 'salary:-16LPA,',
    location: 'Location:-Pune,',
    experience: ' experience:-8years',
    education: 'Post Graduate',
    status:true
  }
  jobsList :jobs[]= [this.capgemini,this.wipro,this.accenture];
 

  constructor() { }

  ngOnInit(): void {
  }

}
interface jobs {
  companyName :string;
  jobRole:string;
  salary:string;
  location:string;
  experience:string;
  status:boolean;
  education:string;
  
  
}
