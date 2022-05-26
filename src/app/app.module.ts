import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { AllLinksComponent } from './all-links/all-links.component';
import { FilterPipe } from './app.filter';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './jobs/jobs.component';
import { CompaniesComponent } from './companies/companies.component';
import { RecuitersComponent } from './recuiters/recuiters.component';
import { ToolsComponent } from './tools/tools.component';
import { MoreComponent } from './more/more.component';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { RightComponent } from './right/right.component';


const routes:Routes = [

  {path:'main-area',component:MainAreaComponent},
  {path:'jobs',component:JobsComponent},
  {path:'companies',component:CompaniesComponent},
  {path:'recuiters', component:RecuitersComponent},
  {path:'Tools',component:ToolsComponent},
  {path:'More',component:MoreComponent}
  

];



@NgModule({
  declarations: [
    AppComponent,
    MainAreaComponent,
    AllLinksComponent,

    FilterPipe,
     JobsComponent,
     CompaniesComponent,
     RecuitersComponent,
     ToolsComponent,
     MoreComponent,
     RightComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
