import './AddingElement.css';

type AddingElementProps = {
    number1: number;
    number2: number;
};

export default function AddingElement ({ number1, number2 }: AddingElementProps) {
    const sum = number1 + number2;

    return (
        <div className="line">
            <div className='number'>{number1}</div>
            <div className='symbol'>+</div>
            <div className='number'>{number2}</div>
            <div className='symbol'>=</div>
            <div className='result'>{sum}</div>
        </div>
    );
};
