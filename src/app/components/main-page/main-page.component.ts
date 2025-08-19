import { Component } from '@angular/core';
import { StatusDonutComponent } from '../status-donut/status-donut.component';
import { Filter, PendingLine, statusCounts, UserBar } from '../../model/interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { count } from 'rxjs';
import { PendingLineDonutComponent } from '../pending-line-donut/pending-line-donut.component';
import { UserApprovalBarComponent } from '../user-approval-bar/user-approval-bar.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [StatusDonutComponent, FormsModule, PendingLineDonutComponent, UserApprovalBarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  data1:statusCounts[]=[
  { status_stage: "Uploaded(Not_Reviewed)", count: 4 },
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

  data5:UserBar[]=[
    {name : "Yash1"   ,ApprovedReport_Count : 20},
    {name : "Yash2"   ,ApprovedReport_Count : 50},
    {name : "Yash3"   ,ApprovedReport_Count : 60},
    {name : "Yash4"   ,ApprovedReport_Count : 10},
    {name : "Yash5"   ,ApprovedReport_Count : 80},
    {name : "Yash6"   ,ApprovedReport_Count : 30},
    {name : "Yash7"   ,ApprovedReport_Count : 60},
    {name : "Yash8"   ,ApprovedReport_Count : 90},
    {name : "Yash9"   ,ApprovedReport_Count : 20},
    {name : "Yash10"   ,ApprovedReport_Count : 80}
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
