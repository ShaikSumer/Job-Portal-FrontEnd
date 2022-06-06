import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RightComponent } from './right/right.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  AllProductsEndPoint:String ='http://localhost:8080/job/'
  selectedJob:any
  

  constructor(private http:HttpClient) { 

  }
        
  getAllProducts():Observable<any>{
    return this.http.get<any>(`${this.AllProductsEndPoint}`+'Jobs');

  }
  getSelectedJob(element:any){
      this.selectedJob=element;
  }
  
  
  
 
  
}


