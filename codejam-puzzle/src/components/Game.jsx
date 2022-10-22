import React, {useState} from 'react';

let time = '00:00'

let id = 0;

function Game (){
    let [moves, setMoves] = useState(0);
    let [sizes, setSize] = useState('4x4');
    function x3(){
        setSize(sizes = '3x3')
        id = 3 * 3;
    }
    function x4(){
        setSize(sizes = '4x4')
        id = 4 * 4;
    }
    function x5(){
        setSize(sizes = '5x5')
        id = 5 * 5;
    }
    function x6(){
        setSize(sizes = '6x6')
        id = 6 * 6;
    }
    function x7(){
        setSize(sizes = '7x7')
        id = 7 * 7;
    }
    function x8(){
        setSize(sizes = '8x8')
        id = 8 * 8;
    }


    return (
        <div>
            <div className="buttons-container">
                <div className="btn-wrapper">
                    <button id="shuffle">
                        Shuffle and start
                    </button>
                    <button id="stop">
                        Stop
                    </button>
                    <button id="save">
                        Save
                    </button>
                    <button id="result">
                        Result
                    </button>
                </div>
            </div>

            <div className="counts">
                <p className="moves">
                    Moves: {moves}
                </p>
                <p className="time">
                    Time: {time}
                </p>
            </div>

            <div className="gem-wrapper">
                <div className="gems">

                </div>

            </div>

            <p className="size" id="frameSize">
                Frame size: {sizes}
            </p>

            <div className="other-size">
                <p>Other size:</p>
                <div className="btnSize">
                    <button id="x3" className="xBtn" value="3x3" onClick={x3}>3x3</button>
                    <button id="x4" className="xBtn" value="4x4" onClick={x4}>4x4</button>
                    <button id="x5" className="xBtn" value="5x5" onClick={x5}>5x5</button>
                    <button id="x6" className="xBtn" value="6x6" onClick={x6}>6x6</button>
                    <button id="x7" className="xBtn" value="7x7" onClick={x7}>7x7</button>
                    <button id="x8" className="xBtn" value="8x8" onClick={x8}>8x8</button>
                </div>
            </div>
        </div>
    );
}

export default Game;