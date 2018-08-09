import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {TrendService} from '../../../shared/trend.service';
import * as moment from 'moment';

@Component({
  selector: 'app-enterprises-and-employment',
  templateUrl: './enterprises-and-employment.component.html',
  styleUrls: ['./enterprises-and-employment.component.less']
})
export class EnterprisesAndEmploymentComponent implements OnInit {

  trendConfigs: ColumnItem[];
  getTrendTableDataFn: GetTableDataFn;

  @ViewChild('dataChart')
  dataChart: DataChartComponent; // 交易量图

  dateRange: Date[] = [];

  constructor(private trendService: TrendService) {
  }

  ngOnInit() {
    this.trendConfigs = this.createColumnConfigs();

    this.getTrendTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.trendService.pagingTrendListView({
        ...date,
        indexType1: '电子商务企业数',
        indexType2: '电子商务从业人数',
        pageNo: pageIndex,
        pageSize: pageSize,
      });
    };
  }

  async setChartOption() {
    const lineSourceData = (await this.getLineChartData()).data;

    const lineCategoryList = [],
      lineVolumeList = [],
      lineCountList = [];
    for (let i = 0; i < lineSourceData.length; i++) {
      const data = lineSourceData[i];
      lineCategoryList.push(data.dateStr);
      lineVolumeList.push(data.totalVolume || 0);
      lineCountList.push(data.totalCount || 0);
    }

    const lineOption = {
      xAxis: {
        type: 'category',
        data: lineCategoryList
      },
      tooltip: {
        trigger: 'axis'
      },
      yAxis: [
        {type: 'value'},
        {type: 'value'},
      ],
      series: [{
        data: lineVolumeList,
        yAxisIndex: 0,
        type: 'line',
        name: '电子商务企业数'
      }, {
        data: lineCountList,
        yAxisIndex: 1,
        type: 'line',
        name: '电子商务从业人数'
      }]
    };
    this.dataChart.setOption(lineOption);
  }

  getLineChartData(): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const date = this.getDateRangeParam();
    return this.trendService.getTrendLineData({
      indexType1: '电子商务企业数',
      indexType2: '电子商务从业人数',
      ...date
    });
  }

  private createColumnConfigs() {
    const configs: ColumnItem[] = [
      {column: 'dateStr', title: '时间'},
      {column: 'totalVolume', title: '交易额'},
      {
        column: 'totalMum', title: '交易额环比',
        formatter: (row, val) => {
          return `${val || 0}%`;
        }
      },
      {column: 'totalCount', title: '交易量'},
      {
        column: 'totalCountMum', title: '交易量环比',
        formatter: (row, val) => {
          return `${val || 0}%`;
        }
      },
    ];

    return configs;
  }

  private getDateRangeParam() {
    const param = {
      dateBegin: void 0,
      dateEnd: void 0,
    };
    if (this.dateRange && this.dateRange.length === 2) {
      const [s, e] = this.dateRange;
      param.dateBegin = `${moment(s).format('YYYY-MM')}-01`;
      param.dateEnd = `${moment(e).format('YYYY-MM')}-02`;
    }
    return param;
  }

}
