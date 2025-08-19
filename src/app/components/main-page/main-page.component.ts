import { Component } from '@angular/core';
import { StatusDonutComponent } from '../status-donut/status-donut.component';
import { Filter, statusCounts } from '../../model/interfaces';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [StatusDonutComponent, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  data:statusCounts[]=[
  { status_stage: "Uploaded(Not_Reviewed)", count: 4 },
  { status_stage: "Review1", count: 3 },
  { status_stage: "Review2", count: 2 },
  { status_stage: "Review3", count: 3 },
  { status_stage: "Review4", count: 2 },
  { status_stage: "Approved", count: 6 }
];

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
