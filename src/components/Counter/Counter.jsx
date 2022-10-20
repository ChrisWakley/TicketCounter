import {React, useState} from "react";
import { images } from "../../assets/Images/Index.js";
import "./Counter.scss";

const TicketCounter = () => {

    let [counter, setCounter] = useState(0)
    const increaseCounter = () => {
        setCounter(counter + 1);
    };
    const decreaseCounter = () => {
        if(counter <= 0) {
            counter = 0
        } else {;
        setCounter(counter - 1)};
    };

    return (
        <div className="counter__container">
            <h2 className="counter__heading">Ticket Counter</h2>
            <div className="counter__body">
                <div className="counter-container__minusOne">
                    <img
                    src={images[11]}
                    onClick={decreaseCounter}
                    alt=""
                    className="counter__image--red"
                    ></img>
                    <p className="counter__text">-1</p>
                </div>
                <p className="counter__text">{[counter]}</p>
                <div className="counter-container__plusOne">
                    <img
                    src={images[12]}
                    alt=""
                    onClick={increaseCounter}
                    className="counter__image--green"
                    ></img>
                    <p className="counter__text">+1</p>
                </div>
            </div>
        </div>
    );
}

export default TicketCounter