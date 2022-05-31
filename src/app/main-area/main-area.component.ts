import { Component, OnInit, VERSION } from '@angular/core';
import { ApiService } from '../Api.service';


@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {

  title = 'Job-Portal';
  sessionAction:string="Login/Logout" // control through code

  
  service:ApiService;


  constructor(service1:ApiService) {
    
    this.service=service1;
   
  }
  ngOnInit(): void {
   
  }
  

 
  
  
  
  work = [
    {
      name:'Work From Hme',
      id:1,
     
    },{
      name:'Offline',
      id:2,
      
    }
    
  ];
  experience = [
    
    {
      name:'0-2 years',
      id:1,
      
    },{
      name:'2-5 years',
      id:2,
      
    },{
      name:'5-10 years',
      id:3,
      
    }
  ];

  salary = [
    {
      name:'3-4 LPA',
      id:1,
      
    },{
      name:'4-6 LPA',
      id:2,
     
    },{
      name:'6-10 LPA',
      id:2,
      
    },{
      name:'10-15 LPA',
      id:2,
      
    }
  ];

  education =[
    {
      name:'Any Graduate',
      id:1,
      
    },{
      name:'Post Graduate',
      id:2,
      
    },{
      name:'MBA/MCA',
      id:3,
      
    }
  ];

  
  

  
}




