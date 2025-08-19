import { Component, Input, SimpleChanges, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { UserBar } from '../../model/interfaces';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-user-approval-bar',
  standalone: true,
  imports: [],
  templateUrl: './user-approval-bar.component.html',
  styleUrl: './user-approval-bar.component.css'
})
export class UserApprovalBarComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input() UserPrograss : UserBar[] = [];

  private root!: am5.Root;
  private xAxis!: am5xy.CategoryAxis<am5xy.AxisRenderer>;
  private series!: am5xy.ColumnSeries;

  ngAfterViewInit(): void {
    // Root
    this.root = am5.Root.new("userbar");
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    // Chart
    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
      paddingLeft: 0,
      paddingRight: 1
    }));

    // Cursor
    let cursor = chart.set("cursor", am5xy.XYCursor.new(this.root, {}));
    cursor.lineY.set("visible", false);

    // X Axis
    let xRenderer = am5xy.AxisRendererX.new(this.root, {
      minGridDistance: 30,
      minorGridEnabled: true
    });

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15
    });

    xRenderer.grid.template.setAll({
      location: 1
    });

    this.xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      maxDeviation: 0.3,
      categoryField: "name", 
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(this.root, {})
    }));

    // Y Axis
    let yRenderer = am5xy.AxisRendererY.new(this.root, {
      strokeOpacity: 0.1
    });

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      maxDeviation: 0.3,
      renderer: yRenderer
    }));

    // Series
    this.series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
      name: "Series 1",
      xAxis: this.xAxis,
      yAxis: yAxis,
      valueYField: "ApprovedReport_Count", 
      categoryXField: "name",  
      sequencedInterpolation: true,
      tooltip: am5.Tooltip.new(this.root, {
        labelText: "{valueY}"
      })
    }));

    this.series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0
    });

    this.series.columns.template.adapters.add("fill", (fill, target) => {
  return chart?.get("colors")?.getIndex(this.series.columns.indexOf(target)) ?? fill;
});

this.series.columns.template.adapters.add("stroke", (stroke, target) => {
  return chart?.get("colors")?.getIndex(this.series.columns.indexOf(target)) ?? stroke;
});


    // Animation
    this.series.appear(1000);
    chart.appear(1000, 100);

    // ✅ Agar parent se data mila hai to laga do
    if (this.UserPrograss?.length) {
      this.xAxis.data.setAll(this.UserPrograss);
      this.series.data.setAll(this.UserPrograss);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['UserPrograss'] && this.series && this.xAxis) {
      this.xAxis.data.setAll(this.UserPrograss);
      this.series.data.setAll(this.UserPrograss);
    }
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}
