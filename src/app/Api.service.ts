import { Injectable } from '@angular/core';
import { RightComponent } from './right/right.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  

  constructor() { 
    
  }
  
  
  capgemini:jobs={
    companyName : "CAPGEMINI,",
    jobRole: 'Java Developer,',
    salary: 4,
    location: 'Banglore,',
    experience: 1,
    education: 'MBA/MCA',
    status:false,
    type:"Work From Hme"

    
  }
  wipro:jobs={
    companyName : "WIPRO,",
    jobRole: 'Java Developer,',
    salary: 8,
    location: 'Hyderabad,',
    experience: 3,
    education: 'Any Graduate',
    status:true,
    type:"Offline"
    
  }
  accenture:jobs={
    companyName : "ACCENTURE,",
    jobRole: 'Sr.Java Developer,',
    salary: 12,
    location: 'Pune,',
    experience: 8,
    education: 'Post Graduate',
    status:true,
    type:"Work From Hme"
  }
  jobsList :jobs[]= [this.capgemini,this.wipro,this.accenture];

  jobsService(){
    return this.jobsList;
  }
  
}
interface jobs {
  companyName :string;
  jobRole:string;
  salary:number;
  location:string;
  experience:number;
  status:boolean;
  education:string;
  type:string;
  
  
}

