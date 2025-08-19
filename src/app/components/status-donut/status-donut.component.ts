import { Component, Input, SimpleChanges } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { statusCounts } from '../../model/interfaces';




@Component({
  selector: 'app-status-donut',
  standalone: true,
  imports: [],
  templateUrl: './status-donut.component.html',
  styleUrl: './status-donut.component.css'
})
export class StatusDonutComponent {

  @Input() chartData: statusCounts[] = [];

  private root!: am5.Root;
  private series!: am5percent.PieSeries;

  ngAfterViewInit(): void {
    // Root
    this.root = am5.Root.new('chartdiv');
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
        categoryField: 'status_stage',
        alignLabels: false,
      })
    );

    this.series.labels.template.setAll({
      text: "{category}: {value}",
      textType: 'circular',
      centerX: 0,
      centerY: 0,
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
