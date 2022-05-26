import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {

  title = 'Job-Portal';
  sessionAction:string="Login/Logout" // control through code

  
  
  selected_work: { name: string; id: number; selected: boolean; }[] = [];
  selected_experience: { name: string; id: number; selected: boolean; }[] = [];
  selected_salary: { name: string; id: number; selected: boolean; }[] = [];
  selected_education: { name: string; id: number; selected: boolean; }[] = [];
  name:string;
  searchText:string = "";
  selected_count:number = 0;
  

 
  
  
  // Data Object to list of work from home
  work = [
    {
      name:'Work From Hme',
      id:1,
      selected:true
    },{
      name:'Offline',
      id:2,
      selected:false
    }
    
  ]
  experience = [
    
    {
      name:'0-2 years',
      id:1,
      selected:true
    },{
      name:'2-5 years',
      id:2,
      selected:false
    },{
      name:'5-10 years',
      id:3,
      selected:false
    }
  ]

  salary = [
    {
      name:'3-4 LPA',
      id:1,
      selected:true
    },{
      name:'4-6 LPA',
      id:2,
      selected:false
    },{
      name:'6-10 LPA',
      id:2,
      selected:false
    },{
      name:'10-15 LPA',
      id:2,
      selected:false
    }
  ]

  education =[
    {
      name:'Any Graduate',
      id:1,
      selected:true
    },{
      name:'Post Graduate',
      id:2,
      selected:false
    },{
      name:'MBA/MCA',
      id:3,
      selected:false
    }
  ]
  
  

  
  // Getting Selected 
  getSelected(){

    //work from home
      this.selected_work =  this.work.filter( a=> {
        //this.allFilters.push(a.selected);
          return a.selected;
      });
     this.selected_count = this.selected_work.length;
      
     
    //experience
     this.selected_experience =  this.experience.filter( b => {
      
      return b.selected ;
    });
      this.selected_count = this.selected_experience.length; 

    //salary
      this.selected_salary =  this.salary.filter( c => {
      return c.selected;
      });
      this.selected_count = this.selected_salary.length; 

    //education
      this.selected_education =  this.education.filter( d => {
      return d.selected;
      });
      this.selected_count = this.selected_education.length; 
     
  }

  
  
  // Clearing All Selections
  clearSelection(){
    this.searchText = "";
    this.work =  this.work.filter( a => {
          a.selected = false;
          return true;
        });
   this.getSelected();    
  }


  deleteWork(id:number){
    this.searchText = "";
    this.work =  this.work.filter( a => {
          if(a.id == id)
          a.selected = false;
          
          return true;
        });
    this.getSelected(); 


  }

  deleteExperience(id:number){
    this.searchText = "";
    this.experience =  this.experience.filter( b => {
          if(b.id == id)
          b.selected = false;
          
          return true;
        });
    this.getSelected(); 


  }
  
  deleteSalary(id:number){
    this.searchText = "";
    this.salary =  this.salary.filter( c => {
          if(c.id == id)
          c.selected = false;
          
          return true;
        });
    this.getSelected(); 
  }


  deleteEducation(id:number){
    this.searchText = "";
    this.education =  this.education.filter( d => {
          if(d.id == id)
          d.selected = false;
          
          return true;
        });
    this.getSelected(); 
  }


  
  clearFilter(){
    this.searchText = "";
  }
  
  constructor() {
    this.name = `Angular! v${VERSION.full}`;
    this.getSelected();
   
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}