import './Adding.css';
import AddingElement from './AddingElement';

type AddingProps = {
    minNumber: number;
    maxNumber: number;
    repeats: number;
};

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export default function Adding ({ minNumber, maxNumber, repeats }: AddingProps) {

    const addingElements = [];
    for (let index = 0; index < repeats; index++) {
        addingElements.push(<AddingElement number1={randomIntFromInterval(minNumber, maxNumber)} number2={randomIntFromInterval(minNumber, maxNumber)} />);
    }

    return (
        <div className="line">
            {addingElements}
        </div>
    );
};