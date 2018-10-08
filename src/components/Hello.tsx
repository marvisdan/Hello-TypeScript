
import * as React from 'react';
import './Hello.module.scss';
export interface IProps {
  languageName: string;
  enthusiasmLevel?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
// need functionnal component to connect HOC because there is no state 
function Hello({ languageName, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {

    if( enthusiasmLevel <=0 ) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
      <div className="ok">
        <div className="greeting">
        Hello {languageName + getExclamationMark(enthusiasmLevel)}
        </div>
        <button onClick={onIncrement}> + </button>
        <button onClick={onDecrement}> _ </button>
      </div>
    );
}
// Helper
function getExclamationMark(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Hello;