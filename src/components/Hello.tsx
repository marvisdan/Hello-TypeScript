
import * as React from 'react';

export interface Props {
  name: string,
  enthusiasmLevel?: number,
}
interface State {
  currentEnthusiasm: number,
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
      this.state= {
        currentEnthusiasm: props.enthusiasmLevel || 1,
      };
  }
  public updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
  public onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  public onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);


  render() {
    const {name } = this.props;
    if( this.state.currentEnthusiasm <= 0 ) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
      <div className="hello">
        <div className="greeting">
        Hello {name + getExclamationMark(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onIncrement}> + </button>
        <button onClick={this.onDecrement}> _ </button>
      </div>
    );
  }
}
// Helper
function getExclamationMark(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Hello;