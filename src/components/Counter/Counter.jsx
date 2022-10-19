import {React, useState} from "react";
import "./Counter.scss";

const TicketCounter = () => {

    const [counter, setCounter] = useState(0)
    const increaseCounter = () => {
        setCounter(counter + 1);
    };
    const decreaseCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="counter__container">
            <h2 className="counter__heading">Ticket Counter</h2>
            <div className="counter__body">
                <button
                onClick={decreaseCounter}
                className="counter__button counter__button--plusOne"
                >
                -1
                </button>
                <p className="counter__text">{[counter]}</p>
                <button
                onClick={increaseCounter}
                className="counter__button counter__button--minusOne"
                >
                +1
                </button>
            </div>
        </div>
    );
}

export default TicketCounter