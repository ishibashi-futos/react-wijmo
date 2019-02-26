import * as React from 'react';
import 'wijmo/styles/wijmo.css';
// import 'wijmo/cultures/wijmo.culture.ja';
import * as wjGauge from 'wijmo/wijmo.react.gauge';

interface IState {
  gaugeValue: number;
}

class Guage extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      gaugeValue: 30
    }
    this.gaugeChanged = this.gaugeChanged.bind(this);
    this.textboxChanged = this.textboxChanged.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <h1>Wijmo + React(ゲージ)</h1>
        <wjGauge.LinearGauge className="wijmo-control"
        value={this.state.gaugeValue} valueChanged={this.textboxChanged}/>
        gaugeValue:<input type="text" className="textBox" 
        value={this.state.gaugeValue} onChange={this.textboxChanged}/>
      </div>
    );
  }

  private gaugeChanged(newValue: number) {
    this.setState({gaugeValue: newValue});
  }

  private textboxChanged(newValue: React.ChangeEvent<HTMLInputElement>) {
    const input = newValue.target as HTMLInputElement;
    if (input != null) {
      if (!isNaN(Number(input.value))) {
        this.setState({gaugeValue: Number(input.value)});
      }
    }
  }

}

export default Guage;
