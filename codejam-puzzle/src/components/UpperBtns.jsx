import React from 'react';

const UpperBtns = () => {
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
        </div>
    );
};

export default UpperBtns;