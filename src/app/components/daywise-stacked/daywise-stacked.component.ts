import { Component, Input, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { DaywiseStacked } from '../../model/interfaces';

@Component({
  selector: 'app-daywise-stacked',
  standalone: true,
  imports: [],
  templateUrl: './daywise-stacked.component.html',
  styleUrl: './daywise-stacked.component.css'
})
export class DaywiseStackedComponent implements AfterViewInit, OnDestroy {

  @Input() DayWiseReportData: DaywiseStacked[] = [];

  private root!: am5.Root;
  private chart!: am5xy.XYChart;

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart():void{
    // Root
    this.root = am5.Root.new('stackedChartDiv');
    this.root._logo?.dispose()
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    // Chart
    this.chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0,
      layout: this.root.verticalLayout
    }));

    // Scrollbar
    this.chart.set("scrollbarX", am5.Scrollbar.new(this.root, {
      orientation: "horizontal"
    }));

    // X Axis
    let xRenderer = am5xy.AxisRendererX.new(this.root, { minorGridEnabled: true });

    //new
        xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        oversizedBehavior: "wrap"
      });

    let xAxis = this.chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "date",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(this.root, {})
    }));

    xRenderer.grid.template.setAll({ location: 1 });

    // Y Axis
    let yAxis = this.chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      min: 0,
      renderer: am5xy.AxisRendererY.new(this.root, { strokeOpacity: 0.1 })
    }));

    // Legend
    let legend = this.chart.children.push(am5.Legend.new(this.root, {
      centerX: am5.p50,
      x: am5.p50
    }));

    // ✅ Helper to make series
    const makeSeries = (name: string, fieldName: keyof DaywiseStacked) => {
      let series = this.chart.series.push(am5xy.ColumnSeries.new(this.root, {
        name,
        stacked: true,
        xAxis,
        yAxis,
        valueYField: fieldName as string,
        categoryXField: "date"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        tooltipY: am5.percent(10)
      });

      series.data.setAll(this.DayWiseReportData);

      // Animate
      series.appear();

      // Label bullets
      series.bullets.push(() => {
        return am5.Bullet.new(this.root, {
          sprite: am5.Label.new(this.root, {
            text: "{valueY}",
            fill: this.root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    };

    // ✅ Make series for uploaded, reviewed, approved
    makeSeries("Uploaded", "uploaded");
    makeSeries("Reviewed", "reviewed");
    makeSeries("Approved", "approved");

    // Animate chart
    this.chart.appear(1000, 100);

    // X-axis data load
    xAxis.data.setAll(this.DayWiseReportData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['DayWiseReportData'] && this.chart) {
      // Update chart with new data
      this.chart.series.each(series => {
        series.data.setAll(this.DayWiseReportData);
      });
      this.chart.xAxes.each(axis => {
        if (axis instanceof am5xy.CategoryAxis) {
          axis.data.setAll(this.DayWiseReportData);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}
