import {Component, OnInit, ViewChild} from '@angular/core';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {ColumnItem, DataTableComponent} from '../../../shared/data-table/data-table.component';
import {HomeService} from '../../../shared/home.service';
import * as moment from 'moment';
import {map} from 'lodash';
import {TrendService} from '../../../shared/trend.service';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.less']
})
export class ContrastComponent implements OnInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  @ViewChild('dataTable')
  dataTable: DataTableComponent;

  dateRange: Date[] = [];

  platform = '';
  loading = false;
  categoryList: OptionItem[];
  private dateAreaStr: string;

  constructor(private homeService: HomeService,
              private trendService: TrendService) {
  }

  async ngOnInit() {

    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.homeService.pagingAreaListview({
        ...date,
        orderBy: 'INDEX_VALUE',
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
    this.categoryList = [
      {label: 'B2B', value: 'B2B'},
      {label: '网络零售', value: '网络零售'},
    ];
  }

  async setChartOption() {
    const data = (await this.getChartData()).data;

    const citys = map(data, 'city');
    const totals = map(data, 'totalVolume');

    const option = {
      xAxis: {
        type: 'category',
        data: citys
      },
      tooltip: {trigger: 'axis'},
      yAxis: [{type: 'value'}],
      dataZoom: [{
        startValue: citys[0]
      }, {
        type: 'inside'
      }],
      series: [{
        name: '销售额',
        data: totals,
        type: 'bar'
      }]
    };

    this.dataChart.setOption(option);
    this.loading = false;
  }

  getChartData(): Promise<AjaxResult<any>> {
    const date = this.getDateRangeParam();
    return this.trendService.getTrendCityLineData({
      ...date,
      platform: this.platform || void 0
    });
  }

  private createColumnVolumeConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'date', title: '时间',
        formatter: () => {
          return this.dateAreaStr;
        }
      },
      {column: 'province', title: '省'},
      {column: 'city', title: '市'},
      {column: 'ramark1', title: '指标类型'},
      {column: 'mom', title: '指标值'},
      {
        column: 'sortBy', title: '排名',
        formatter: (row, value, index) => {
          const startIndex = (this.dataTable.pageIndex - 1) * this.dataTable.pageSize;
          return startIndex + index + 1;
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
      const [s, e] = [
        moment(this.dateRange[0]).format('YYYY-MM'),
        moment(this.dateRange[1]).format('YYYY-MM')
      ];
      param.dateBegin = `${s}-01`;
      param.dateEnd = `${e}-02`;
      this.dateAreaStr = `${s}-${e}`;
    }
    return param;
  }

}