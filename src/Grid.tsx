import * as React from 'react';
import 'wijmo/styles/wijmo.css';
import * as wj from 'wijmo/wijmo'
import * as wjChart from 'wijmo/wijmo.react.chart';
import * as wjGrid from 'wijmo/wijmo.react.grid';

interface IState {
  cvData: wj.CollectionView;
}

class Grid extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cvData: new wj.CollectionView([
        {
          "count" : 200,
          "time" : 160,
          "ym" : "2019/01"
        },{
          "count" : 300,
          "time" : 200,
          "ym" : "2019/02"
        },{
          "count" : 150,
          "time" : 210,
          "ym" : "2019/03"
        }
      ])
    }
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <div className="grid">
        {this.localRender()}
        </div>
      </div>
    );
  }

  private localRender(): JSX.Element {
    return (
      <div>
        <wjChart.FlexChart itemsSource={this.state.cvData} bindingX="ym">
          <wjChart.FlexChartSeries name="稼働時間" binding="time"/>
          <wjChart.FlexChartSeries name="生産数" binding="count" chartType="LineSymbols"/> 
          <wjChart.FlexChartLegend position="Bottom"/>
        </wjChart.FlexChart>
        <wjGrid.FlexGrid itemsSource={this.state.cvData} >
          <wjGrid.FlexGridColumn header="年月" binding="ym" width="*" />
          <wjGrid.FlexGridColumn header="稼働時間" binding="time" width="*" />
          <wjGrid.FlexGridColumn header="生産性" binding="count" width="*" />
        </wjGrid.FlexGrid>
      </div>
    )
  }
}

export default Grid;
