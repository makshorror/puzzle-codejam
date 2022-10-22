import React, {useState} from 'react';

function Size() {
    let [sizes, setSize] = useState('4x4')
    function x3(){
        setSize(sizes = '3x3')
    }
    function x4(){
        setSize(sizes = '4x4')
    }
    function x5(){
        setSize(sizes = '5x5')
    }
    function x6(){
        setSize(sizes = '6x6')
    }
    function x7(){
        setSize(sizes = '7x7')
    }
    function x8(){
        setSize(sizes = '8x8')
    }
    return (
        <div>
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


export default Size;