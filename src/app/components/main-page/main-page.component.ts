import { Component } from '@angular/core';
import { StatusDonutComponent } from '../status-donut/status-donut.component';
import { DaywiseStacked, Filter, PendingLine, ReviewerCount, statusCounts, UserBar } from '../../model/interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { count } from 'rxjs';
import { PendingLineDonutComponent } from '../pending-line-donut/pending-line-donut.component';
import { UserApprovalBarComponent } from '../user-approval-bar/user-approval-bar.component';
import { DaywiseStackedComponent } from '../daywise-stacked/daywise-stacked.component';
import { ReviewerDonutComponent } from '../reviewer-donut/reviewer-donut.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [StatusDonutComponent,
            FormsModule,
            PendingLineDonutComponent,
            UserApprovalBarComponent,
            DaywiseStackedComponent,
            ReviewerDonutComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  data1:statusCounts[]=[
  { status_stage: "Uploaded(Not Reviewed)", count: 4 },
  { status_stage: "Review1", count: 3 },
  { status_stage: "Review2", count: 2 },
  { status_stage: "Review3", count: 3 },
  { status_stage: "Review4", count: 2 },
  { status_stage: "Approved", count: 6 }
];

  data2:PendingLine[]=[
    { Report_Status: "Report Approved", count: 12 },
    { Report_Status: "Report Pending", count: 10 },
  ]

  data3:ReviewerCount[]=[
    {date : "01/02/2022" , count : 20},
    {date : "02/02/2022" , count : 60},
    {date : "03/02/2022" , count : 40},
    {date : "04/02/2022" , count : 10},
    {date : "05/02/2022" , count : 70},
  ]

  data4:DaywiseStacked[]=[
    {date: "01/02/2012", uploaded:5, reviewed:2,approved:10},
    {date: "02/02/2012", uploaded:4, reviewed:4,approved:11},
    {date: "03/02/2012", uploaded:5, reviewed:7,approved:16},
    {date: "04/02/2012", uploaded:7, reviewed:2,approved:17},
    {date: "05/02/2012", uploaded:8, reviewed:9,approved:11},
    {date: "06/02/2012", uploaded:1, reviewed:5,approved:5},
    {date: "07/02/2012", uploaded:5, reviewed:4,approved:11},
    {date: "08/02/2012", uploaded:8, reviewed:3,approved:9},
    {date: "09/02/2012", uploaded:9, reviewed:9,approved:16},
    {date: "10/02/2012", uploaded:10, reviewed:10,approved:11}
  ]

  data5:UserBar[]=[
    {name : "Yash"   ,ApprovedReport_Count : 20},
    {name : "Pooja"   ,ApprovedReport_Count : 50},
    {name : "Chaku"   ,ApprovedReport_Count : 60},
    {name : "Aniket"   ,ApprovedReport_Count : 10},
    {name : "Ram"   ,ApprovedReport_Count : 80},
    {name : "Sham"   ,ApprovedReport_Count : 30},
    {name : "Gagan"   ,ApprovedReport_Count : 60},
    {name : "Ganesh"   ,ApprovedReport_Count : 90},
    {name : "Nagesh"   ,ApprovedReport_Count : 20},
    {name : "Sita"   ,ApprovedReport_Count : 80}
  ]










  // filter:Filter={
  //   LineNum:"",
  //   FromDate:"",
  //   ToDate:""
  // }

Search(f:NgForm):void{
  console.log(f.value)
  // this.filter=f.value

  // if(this.filter.LineNum == 'line1'){

  // }
  
}

}
