import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Api.service';


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  title = 'Job-Portal';
  sessionAction:string="Login/Logout" // control through code

  
  service:ApiService;


  constructor(service1:ApiService,private router:Router) {
    
    this.service=service1;
   
  }
  Jobs:any[]=[];
  Jobs2:any[]=[];
  getJobs(){
    this.service.getAllProducts().subscribe((data:any)=>{
      this.Jobs=data;
      this.Jobs2=data;
      console.log(this.Jobs)
    },
   error=>{
     console.log(error);
   } );
   
  }
  ngOnInit(): void {

    this.getJobs();
   
  }

  tempArray:any[]=[];
  newArray:any[]=[];
  onChange(event:any){
    

    if(event.target.checked){
      this.tempArray=this.Jobs2.filter((e:any)=>e.workType == event.target.value);
     
      this.Jobs=[];
      this.newArray.push(this.tempArray);
      console.log(this.newArray);
      for(let i=0;i<this.newArray.length;i++){
        var firstArray = this.newArray[i];
        for(let i=0;i<firstArray.length;i++){
          var obj = firstArray[i];
          this.Jobs.push(obj);
        }
      
  
      }
   

    }
  else{
    
    this.tempArray=this.Jobs.filter((e:any)=>e.type != event.target.value);
    console.log(this.tempArray);
    this.newArray =[];
    this.Jobs=[];
    this.newArray.push(this.tempArray);
   
    for(let i=0;i<this.newArray.length;i++){
      var firstArray = this.newArray[i];
      for(let i=0;i<firstArray.length;i++){
        var obj = firstArray[i];
        this.Jobs.push(obj);
      }
    }
   


  }
  
  }
  tempArray1:any[]=[];
  newArray1:any[]=[];
  onChange1(event:any){
    if(event.target.checked){
      this.tempArray1=this.Jobs2.filter((e:any)=>e.experience >= parseInt(event.target.id) && e.experience <= parseInt(event.target.value));
     console.log(this.tempArray1);
      this.Jobs=[];
      this.newArray1.push(this.tempArray1);
      console.log(this.newArray1);
      for(let i=0;i<this.newArray1.length;i++){
        var firstArray = this.newArray1[i];
        for(let i=0;i<firstArray.length;i++){
          var obj = firstArray[i];
          this.Jobs.push(obj);
        }
      
  
      }
   

    }
  else{
    
    this.tempArray1=this.Jobs.filter((e:any)=>e.experience <= parseInt(event.target.id) || e.experience >= parseInt(event.target.value));
    console.log(this.tempArray1);
    this.newArray1 =[];
    this.Jobs=[];
    this.newArray1.push(this.tempArray1);
   
    for(let i=0;i<this.newArray1.length;i++){
      var firstArray = this.newArray1[i];
      for(let i=0;i<firstArray.length;i++){
        var obj = firstArray[i];
        this.Jobs.push(obj);
      }
    }


  }
}

tempArray2:any[]=[];
newArray2:any[]=[];

onChange2(event:any){
  if(event.target.checked){
    this.tempArray2=this.Jobs2.filter((e:any)=>e.salary >= parseInt(event.target.id) && e.salary <= parseInt(event.target.value));
   console.log(this.tempArray2);
    this.Jobs=[];
    this.newArray2.push(this.tempArray2);
    console.log(this.newArray2);
    for(let i=0;i<this.newArray2.length;i++){
      var firstArray = this.newArray2[i];
      for(let i=0;i<firstArray.length;i++){
        var obj = firstArray[i];
        this.Jobs.push(obj);
      }
    

    }
 

  }
else{
  
  this.tempArray2=this.Jobs.filter((e:any)=>e.salary <= parseInt(event.target.id) || e.salary >= parseInt(event.target.value));
  console.log(this.tempArray2);
  this.newArray2 =[];
  this.Jobs=[];
  this.newArray2.push(this.tempArray2);
 
  for(let i=0;i<this.newArray2.length;i++){
    var firstArray = this.newArray2[i];
    for(let i=0;i<firstArray.length;i++){
      var obj = firstArray[i];
      this.Jobs.push(obj);
    }
  }


}
}
tempArray3:any[]=[];
newArray3:any[]=[];
onChange3(event:any){
  

  if(event.target.checked){
    this.tempArray3=this.Jobs2.filter((e:any)=>e.education == event.target.value);
   console.log(this.tempArray3);
    this.Jobs=[];
    this.newArray3.push(this.tempArray3);
    console.log(this.newArray3);
    for(let i=0;i<this.newArray3.length;i++){
      var firstArray = this.newArray3[i];
      for(let i=0;i<firstArray.length;i++){
        var obj = firstArray[i];
        this.Jobs.push(obj);
      }
    

    }
 

  }
else{
  
  this.tempArray3=this.Jobs.filter((e:any)=>e.education != event.target.value);
  console.log(this.tempArray3);
  this.newArray3 =[];
  this.Jobs=[];
  this.newArray3.push(this.tempArray3);
 
  for(let i=0;i<this.newArray3.length;i++){
    var firstArray = this.newArray3[i];
    for(let i=0;i<firstArray.length;i++){
      var obj = firstArray[i];
      this.Jobs.push(obj);
    }
  }
 


}
}
doThings(name:any){
  this.Jobs.forEach(a=>{
    if(a.company==name){
      this.service.getSelectedJob(a);
    }
  });
  this.router.navigate([`${'/jobs'}`]);


}



  

 
  
  
  
  work = [
    {
      name:'Work From Hme',
      id:1,
      checked:true,
     
    },{
      name:'Offline',
      id:2,
      checked:false
      
    }
    
  ];
  experience = [
    
    {
      name:'0-2 years',
      id:1,
      checked:true,
      min:"0",
      max:"2"
      
    },{
      name:'2-5 years',
      id:2,
      checked:false,
      min:"2",
      max:"5"

      
    },{
      name:'5-10 years',
      id:3,
      checked:false,
      min:"5",
      max:"10"
      
    }
  ];

  salary = [
    {
      name:'3-4 LPA',
      id:1,
      checked:true,
      min:"3",
      max:"4"
      
    },{
      name:'4-6 LPA',
      id:2,
      checked:false,
      min:"4",
      max:"6"
     
    },{
      name:'6-10 LPA',
      id:2,
      checked:false,
      min:"6",
      max:"10"
      
    },{
      name:'10-15 LPA',
      id:2,
      checked:false,
      min:"10",
      max:"15"
      
    }
  ];

  education =[
    {
      name:'Any Graduate',
      id:1,
      checked:true
      
    },{
      name:'Post Graduate',
      id:2,
      checked:false
      
    },{
      name:'MBA/MCA',
      id:3,
      checked:false
    }
  ];

 

 

  

 
}

