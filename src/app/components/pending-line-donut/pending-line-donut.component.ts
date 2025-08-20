import { Component, Input, SimpleChanges } from '@angular/core';
import { PendingLine } from '../../model/interfaces';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-pending-line-donut',
  standalone: true,
  imports: [],
  templateUrl: './pending-line-donut.component.html',
  styleUrl: './pending-line-donut.component.css'
})
export class PendingLineDonutComponent {

    @Input() chartData: PendingLine[] = [];
    
      private root!: am5.Root;
      private series!: am5percent.PieSeries;
    
      ngAfterViewInit(): void {
        this.createChart()
      }

      createChart():void{
           // Root
        this.root = am5.Root.new('pendingline');
        this.root._logo?.dispose()
        this.root.setThemes([am5themes_Animated.new(this.root)]);
    
        // Chart
        let chart = this.root.container.children.push(
          am5percent.PieChart.new(this.root, {
            layout: this.root.verticalLayout,
            innerRadius: am5.percent(50),
          })
        );
    
        // Series
        this.series = chart.series.push(
          am5percent.PieSeries.new(this.root, {
            valueField: 'count',
            categoryField: 'Report_Status',
            alignLabels: false,
          })
        );
    
        this.series.labels.template.setAll({
             text: "{value}",
             radius: -45,              // negative = andar ki taraf
             centerX: am5.percent(50), // horizontal center
             centerY: am5.percent(0),  // slice ke top ke paas
             textAlign: "center",
             populateText: true
        });
    
        this.series.ticks.template.setAll({
        forceHidden: true   // tick line disable
          });

        // ✅ Animation
        this.series.appear(1000, 100);
    
        // Legend
        let legend = chart.children.push(
          am5.Legend.new(this.root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15,
          })
        );
        legend.data.setAll(this.series.dataItems);
    
        // Agar parent se data aaya ho to laga do
        if (this.chartData?.length) {
          this.series.data.setAll(this.chartData);
        }
      }    

      ngOnChanges(changes: SimpleChanges): void {
        if (changes['chartData'] && this.series) {
          this.series.data.setAll(this.chartData);
        }
      }
    
      ngOnDestroy(): void {
        if (this.root) {
          this.root.dispose();
        }
      }
}
