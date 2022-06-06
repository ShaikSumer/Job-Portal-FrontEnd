import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  data:any
  constructor(private service:ApiService) { 
    this.data=this.service.selectedJob;
  }

  ngOnInit(): void {
  }

}
